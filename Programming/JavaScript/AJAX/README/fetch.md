# Fetch API

- The Fetch API provides an interface for fetching resources (including across the network).
- Fetch provides a generic definition of `Request` and `Response` objects (and other things involved with network requests).
- This will allow them to be used whenever they needed in the future, whether it's for service workers, Cache API, and other similar things that handle or modify requests and responses.
- It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.
- For making a request and fetching a resource, use the `fetch()` method. It is implemented in multiple interfaces, specifically `Window` and `WorkerGlobalScope`. This makes it available in pretty much any context you might want to fetch resources in.
- The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a `Promise` that resolves to the `Response` to that request -- as soon as the server responds with headers -- even if the server response is an HTTP error status.
- You can also optionally pass in an `init` options object as the second argument <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request">Request</a>
- Once a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response">Response</a> is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
- You can create a request and response directly using the `Request()` and `Response()` constructors, but it's uncommon to do this directly. Instead, there are more likely to be created as results of other API actions (for example, <a href="https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith">FetchEvent.respondWith()</a> from service workers)

## Using Fetch
- The `Fetch API` provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as `requests and responses.` It also