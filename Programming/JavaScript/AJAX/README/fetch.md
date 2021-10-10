# Fetch API
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
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
- The `Fetch API` provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as `requests and responses.` It also provides a global `fetch()` method that provides an easy, logical way to fetch resource asynchronously across the network.
- This kind of functionality was previously achieved using `XMLHttpRequest`. Fetch provides a better alternative that can be easily used by other technologies such as `Service Workers`.
- Fetch also provides a single logical place to define other `HTTP-Related` concepts such as `CORS` and extensions to `HTTP`.
<br />

### A basic fetch request
- Here we are fetching a JSON file across the network and printing it to the console. 
- The simplest use of `fetch()` takes one argument - the path to the resource you want to fetch - `does not directly return the JSON response body` but instead returns `a promise that resolves with a response object`
- The `Response` object, in turn, does not directly contain the actual `JSON` response body but is instead a representation of the entire HTTP response.
- `To extract the JSON body content` from `the Response object`, we use the `json()` method, which returns a second promise that resolves with the result of `parsing the response body text as JSON.` 

```javascript
fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data))
```

### Supplying request options
- The `fetch()` method can optionally accept a second parameter, an `init` object that allows you to control a number of different settings:

```javascript
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

