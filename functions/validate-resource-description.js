'use strict';

module.exports = (input, options, context) => {
  const path = context.path.toString();

  // Ensures that the properties from the x-bpi-field-metadata are not considered
  if(!path.includes("x-bpi-field-metadata") && !path.includes("x-fast-operation-profiling") && input.description == undefined) {
    return [
      {
        message: "Model properties SHOULD have a description"
      }
    ]
  }
};
