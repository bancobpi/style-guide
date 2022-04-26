'use strict';

module.exports = (input, options, context) => {
  if(input.toLowerCase().includes(options.string.toLowerCase())){
    return [
      {
        message: "COULD you check the word " + input + "? Try dont use: " + options.string
      }
    ]
  }else{
    return []
  }
};