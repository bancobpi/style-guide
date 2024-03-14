'use strict';

module.exports = (input, options, context) => {
  const operationId = input;
  const path = context.path.toString();
  const pathParameters = path.split(",");
  const autoOperationId = buildOperationId(pathParameters[1], pathParameters[2]);
  let securityId = "";
  let desiredSecurityAndOperation = "";
  let actualSecurityAndOperation = "";

  // Obtaining the defined security ID
  if(context.documentInventory.resolved["x-fast-api-metadata"] !== undefined) {
    if(context.documentInventory.resolved["x-fast-api-metadata"].securityId !== undefined) {
      securityId = context.documentInventory.resolved["x-fast-api-metadata"].securityId;
    }
  }

  desiredSecurityAndOperation = securityId + autoOperationId;
  actualSecurityAndOperation = securityId + operationId;

  if(desiredSecurityAndOperation.length <= 43){
    if(operationId == autoOperationId){
      return;
    }else{
      return [
        {
          message: "operationId not compliant. It MUST be: " + autoOperationId
        }
      ]
    }
  }
  else {
    return [
      {
        message: "securityId+operationId MUST be less than or equal to 43 characters."
      }
    ]
  }
};

function buildOperationId (path, verb) {
  var operationId = verb + path.replace(/\//g, '-');
  operationId = operationId.replace(/\{/g,'');
  operationId = operationId.replace(/\}/g,'');

  return operationId;
}