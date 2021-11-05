const http = require("http");

class Expresso {
  constructor() {
    this._stack = [];
  }

  // Yeah I got it! - middleware
  // app.use(function myMiddleware(req, res, next) {
  //     res.end('Hello World');
  //     next();
  // })

  use(middleware) {
    if (typeof middleware !== "function") {
      throw new Error("Middleware must be a function");
    }

    this._stack.push(middleware);
  }

  // Yeah I got it!
  listen(port, callback) {
    const handler = (req, res) => {
      // this.handle() executes all middleware defined on this Espresso
      // app instance will implement this method next!
      this.handle(req, res, (err) => {
        if (err) {
          res.writeHead(500);
          res.end("Internal Server Error");
        }
      });
    };

    // http.createServer((request, response) => { })
    return http.createServer(handler).listen({ port }, callback);
  }

  // This handle() method used above is responsible for executing every middleware.
  // Internally, Express routers have a similar handle() method that executes middleware
  // that matches a request.
  // It will just execute all middleware that was passed in to app.use()
  // Here's how you can implement the handle() method by calling next() recursively.
  handle(req, res, callback) {
    let idx = 0;

    const next = (err) => {
      // If an error occurred, bypass the rest of the pipeline.
      // In express, you would still need to look for error handling middleware,
      // but this example does not support that
      if (err != null) {
        return setImmediate(() => callback(err));
      }

      if (idx >= this._stack.length) {
        return setImmediate(() => callback());
      }

      // Not the same as an internal express layer, which is an object Wrapper around a middleware function.
      // Using the same nomenclature for consistency
      const layer = this._stack[idx++];
      setImmediate(() => {
        try {
          // Execute the layer and rely on it to call 'next()'
          layer(req, res, next);
        } catch (error) {
          next(error);
        }
      });
    };

    next();
  }
}
