
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

- globalThis is a new feature introduced in ECMAScript 2020 (ES11) that provides a standard way to access the global object in any JavaScript environment.

# Why is it useful?
- Consistent Access: In the past, accessing the global object varied depending on the environment 
1. Browser: window
2. Node.js: global
3. Web Workers: self
4. Other Environments: Might have their own global objects

### ForNodeJS JS Environment
- console.log(globalThis.process); === console.log(process);
- console.log(process);

### ForBrowserOnly JS Environment
- console.log(window.document)====console.log(document);
- console.log(window.document);

### CommonJS
- console.log(globalThis.module); 
- OUTPUT : Undefined 

## NodeJS is All About YOur module