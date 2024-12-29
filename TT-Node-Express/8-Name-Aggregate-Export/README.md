

# easily export and requirw multiple function and varaibles

## Key Takeaways

- Avoid mixing module.exports and exports.property incorrectly.If you reassign module.exports, it will override any previous
exports.property assignments.

# Not Working like this
- module.exports is single object or a value
- when you reassign module.exports(e.g. - modules.exports = add),it completely replaces whatever was previously assigned
- if you reassign it again(module.exports = mult), the previous value is replace with muly
- module.exports = add;
- module.exports = mult;

- Use consistent syntax for clarity:
- 1 Assign everything at once with module.exports = { ... }.
- 2 Or assign properties individually with module.exports.property.

# EXAMPLE

- MATH.JS
module.exports = { div, mult, add, sub };

- APP.JS
const { add, mult, div, sub } = require("./math.js");




