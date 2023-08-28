'use strict';

module.exports = (input, options, context) => {
  const operationId = input;
  const path = context.path.toString();
  const pathParameters = path.split(",");
  const autoOperationId = buildOperationId(pathParameters[1], pathParameters[2]);
  const manualOperationId = buildManualOperationId(autoOperationId);

  if(autoOperationId.length <= 39){
    if(operationId == autoOperationId){
      return;
    }else{
      return [
        {
          message: "operationId not compliant. It MUST be: " + autoOperationId
         }
      ]
    }
  }else if(manualOperationId.length <= 39){
    if(operationId == manualOperationId){
      return;
    }else{
      return [
        {
          message: "operationId not compliant. It MUST be: " + manualOperationId
         }
      ]
    }
  }
  else if(autoOperationId.length > 39 || manualOperationId.length > 39){
    if(operationId.length <= 39){
      return;
    }else{
      return [
        {
          message: "operationId must be abbreviated to have a maximum of 39 characters."
         }
      ]
    }
  }
  else{
    return [
      {
        message: "operationId not compliant. Please contact Design Authority."
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

function buildManualOperationId (operationId) {
  var manualOperationId = operationId.replace(/of-/gi, '');

  return manualOperationId;
}