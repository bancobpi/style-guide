'use strict';

module.exports = (input, options, context) => {
  const result = [];
  const canonicalTypes = options.canonicalTypes;

  for (const property of Object.keys(input)) {
    const metadata = input[property]["x-bpi-field-metadata"];
    var flag = false;

    for (const type of canonicalTypes) {
      if(property != "" && (property.includes(type) || type.includes(property))) {
        flag = true;
        break;
      }
    }

    if(flag && metadata === undefined) {
      result.push({
        message: "Validate if attribute " + property + " could reference a canonical type."
      })
    }
  }

  return result;
};