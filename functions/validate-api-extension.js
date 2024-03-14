'use strict';

module.exports = (input, options, context) => {
  const result = [];

  // Ensuring that the error is only thrown on the API and not on the resources
  if(context.documentInventory.resolved.info !== undefined) {
    const extensions = options.extensions;

    extensions.forEach((extension) => {
      if(context.documentInventory.resolved[extension] === undefined) {
        result.push({
          message: "Extension " + extension + " MUST be included in the API"
        })
      }
    });
  }

  return result;
};