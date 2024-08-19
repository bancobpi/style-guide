'use strict';

module.exports = (targetValue, options, context) => {
  const result = [];
  const property = context.path[context.path.length - 1];

  if(property != "" && property.toString().endsWith("Id")) {
    result.push({
        message: "Check if the type of the attribute " + property + " COULD be string"
      });
  }

  return result;
};