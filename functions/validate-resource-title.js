'use strict';

module.exports = (input, options, context) => {
  const path = context.path.toString();

  // Ensuring that the only the titles of the resources are considered, and not the API title
  if(!path.includes("info") && input.length > 50) {
    return [
      {
        message: "The name/title of the resource MUST be less than or equal to 50 characters."
      }
    ]
  }
};