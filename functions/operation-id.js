'use strict';

module.exports = (input, context) => {
  const operationId = input;
  const path = context.path.toString();
  const pathParameters = path.split(",");

  const autoOperationId = buildOperationId(pathParameters[1], pathParameters[2]);

  if (operationId !== autoOperationId) {
    return [
      {
        message: "operationId not compliant. It MUST be: " + autoOperationId
       }
    ]  
  }
};

function buildOperationId (path, verb)
{
  var operationId = verb + path.replace(/\//g, '-'); 
  operationId = operationId.replace(/\{/g,'');
  operationId = operationId.replace(/\}/g,'');

  return operationId;
}
