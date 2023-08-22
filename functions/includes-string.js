'use strict';

module.exports = (input, options, context) => {
  if(input.toString().toLowerCase().includes(options.string.toLowerCase())){
    return [
      {
        message: "COULD you check the attribute " + input + "? Try to avoid the word: " + options.string
      }
    ]
  }else{
    return []
  }
};
