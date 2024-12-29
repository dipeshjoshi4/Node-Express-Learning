# Path Module IN NodeJS

- In Node.js, the path module provides utilities for working with file and directory paths. It's a built-in module, so you don't need to install any .external packages to use it.

### Special Node.js Constants

__filename
• Provides the absolute path of the currently executing file.

__dirname
• Provides the absolute directory path of the currently executing file.
(Only Availble in CommonJS)

### Path Modules Feature

path.parse(): Returns an object with details about a given path, including root,dir, base, ext, and name.

path.join(): Joins multiple path segments into one, using the appropriate separator (\ on Windows, / on Linux/macOS).

path.resolve(): Resolves a sequence of paths into an absolute path, starting from the current directory.

path.extname(): Extracts the file extension from a given path.

path.basename(): Returns the last part of a path (e.g., file name with extension).

path.dirname(): Returns the directory part of a path.

path.sep: Returns the platform-specific path segment separator (\ for Windows,/ for Linux/macOS).