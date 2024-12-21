
# 6: Node.js Secrets: Why There’s No Window or Document in the Server-Side World!

### Did you know  that js behaves differently  in the browser  and in Nodejs ?
- in browser we can write window.document or window we get answer and we see and use many in-built property of DOM
- while we write window in node js we get "window is not define".same answer in "document" or "window.document"

### Node.js context-global
- in nodejs there is no browser related work thats why nodjs not given answer of document and window.document
- in nodjs there is no window and document. why ?  because nodejs runs outside the browser  it doesnt deal with the dom or browser specific APIs
- instead nodejs has a global object. it's the equivalent of window in the browser but designed for a server-side environment
- so if you wirte global in terminal means in Node.js environment thne you will get the built in function of nodejs

### in App.js
- console.log(global) pritn exactly as global print in REPL 
- you can write global.console.log("subscribe");

### globalThis