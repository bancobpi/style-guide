'use strict';

module.exports = (targetValue, options, context) => {
  const result = [];
  for (const verb of Object.keys(targetValue)) {
    const responses = targetValue[verb] || {};
    if(verb.toLowerCase().includes(options.string)){
      for (const [key, value] of Object.entries(responses)) {
        if(key == "type" && value != options.type){
          result.push({
            message: "Check if the type of the attribute " + verb + " COULD be " +  options.type
          });
        }
      }
    }
  }
  return result;
};
