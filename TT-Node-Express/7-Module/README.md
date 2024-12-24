
# React- Components
# Node - Module

### Self-contained code unit:
- Each file in Node.js is treated as a separate module.
- Variables, functions, or objects defined in one file are not accessible in another
file by default unless you explicitly export them.

### Encapsulation:
- Node.js uses the CommonJS module system (module.exports and require) to
ensure the code in one file does not pollute or interfere with the global scope.
- This makes your code modular, maintainable, and easier to debug.

### Different Module

- OS - Provides information about the operating System
- Path - Provides Utility functions for working with file paths
- FS - File System Operations like Reading and writing files
- HTTP - Create HTTP Servers

### What Exactly is a Module in Node.js?

- A module in Node.js represents a file containing code that is self-contained,reusable, and encapsulated.
- Node.js uses the CommonJS module system.
- This module system came before ES Modules was introduced in JavaScript that’s why its syntax is different.
- Modules in Node.js are created by defining separate files for different functionalities.
- You must export anything you want to make accessible to other modules.

### Creating and Organizing Modules
- To make variables or functions available outside the module, they must be explicitly exported using
module.exports.
- In another module, the exported content can be imported using require()

### Example

# math.js
const add = (a,b) => {
    return a + b
}
module.exports = add;

# app.js
const add = require("./math");
console.log(add(5,10))


