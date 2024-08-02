'use strict';

module.exports = (input, options, context) => {
  const result = [];
  const keywords = options.keywords;

  if(keywords.includes(input)) {
    result.push({
      message: "The attribute " + input + " is considered to contain sensitive information, please ensure you want to include it."
    })
  }

  return result;
};