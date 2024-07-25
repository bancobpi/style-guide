'use strict';

module.exports = (input, options, context) => {
  if(input.toString().toLowerCase().includes(options.string.toLowerCase())){
    return [
      {
        message: "Type link-self-body is deprecated and MUST not be used"
      }
    ]
  }else{
    return []
  }
};
