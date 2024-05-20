'use strict';

module.exports = (input, options, context) => {
  const output = [];
  const validPattern = /^[a-zA-Z0-9]+$/;
  let desiredSecurityId = "";

  // Obtaining the defined security ID
  if(context.documentInventory.resolved["x-fast-api-metadata"] !== undefined) {
    if(context.documentInventory.resolved["x-fast-api-metadata"].securityId !== undefined) {
      desiredSecurityId = context.documentInventory.resolved["x-fast-api-metadata"].securityId;
    }
  }

  for (const securityScope of Object.keys(input)) {
    const result = securityScope.split(".");
    const securityId = result[0];
    const scope = result[1];

    if(securityScope.includes(".")) {
      if(desiredSecurityId === securityId) {
        if(securityScope.length <= 43){
          if(!validPattern.test(scope)) {
            output.push({
              message: "Scope " + scope + " MUST be compliant with the following regex: /^[a-zA-Z0-9]+$/"
            });
          }
        }
        else {
          output.push({
            message: "<securityId>.<access-mode> " + securityScope + " MUST be less than or equal to 43 characters."
          });
        }
      }
      else {
        if(desiredSecurityId.length != 0) {
          output.push({
            message: "The securityId for scope " + securityScope + " MUST be equal to: " + desiredSecurityId
          });
        }
      }
    }
    else {
      output.push({
        message: "Scope " + securityScope + " must follow this naming convention: <securityId>.<access-mode>"
      });
    }
  }

  return output;
};
