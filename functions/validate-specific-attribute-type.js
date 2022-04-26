'use strict';

module.exports = (targetValue, options, context) => {
  const result = [];
  for (const verb of Object.keys(targetValue)) {
    const responses = targetValue[verb] || {};
    if(verb.toLowerCase().includes(options.string)){
      for (const [key, value] of Object.entries(responses)) {
        if(key === options.string && value != options.type){
          result.push({
            message: "COULD check the type of attribute: " + verb
          });
        }
      }
    }
  }
  return result;
};