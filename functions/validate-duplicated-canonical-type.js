'use strict';

module.exports = (input, options, context) => {
  var refs = {};
  const result = [];

  for (const property of Object.keys(input)) {
    if(input[property]["x-bpi-field-metadata"]) {
      refs[input[property]["title"]] = (refs[input[property]["title"]] || 0) + 1;
    }
  }

  for (const ref in refs) {
    if (refs[ref] > 1) {
      result.push({
        message: "The canonical type " + ref + " MUST be used only once per resource."
      })
    }
  }

  return result;
};