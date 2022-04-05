'use strict';

module.exports = (input, options, context) => {
  const path = context.path.toString();
  const pathParameters = path.split(",");
  const httpCode = pathParameters[4];
  const url = "error-block-".concat(httpCode);
  const includes = input.includes(url);

  if(includes){
    return [ ]
  }else{
    return [
      {
        message: "Your http code " + httpCode + " MUST reference the Error Block from the Design Library: " + url
      }
    ]
  }
};