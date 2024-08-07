
'use strict';

export default (targetValue,options, context) => {
  const path = context.path.toString().split(",");
  const verb = path[2];
  const splitId = path[1].split("/");   
  var name = path[2];
  const endpoint = path[1];
  const result = [];
  const query = targetValue.parameters;

  if (verb == "get" && splitId.length != 3 && !endpoint.startsWith("/async/")){
    if(query != undefined){
     const pagintationParams = query.filter(
        (param) =>
          (param.in === 'query' && (param.name.toLowerCase() === 'pagenumber' || param.name.toLowerCase() === 'pagesize')) 
      );
      if (pagintationParams.length == 2) {
        if(pagintationParams[0].name == pagintationParams[1].name){
          result.push({
            message: "GET List MUST have pagination query parameters 'pageNumber' and 'pageSize'."
          });
        }else{
          if(pagintationParams[0].required && pagintationParams[1].required) {
            return result;
          }
          else {
            result.push({
              message: "'pageNumber' and 'pageSize' MUST be required."
            });
          }
        } 
      }else{
        result.push({
          message: "GET List MUST have pagination query parameters 'pageNumber' and 'pageSize'."
        });
      }
    }else{
      result.push({
        message: "GET List MUST have pagination query parameters 'pageNumber' and 'pageSize'."
      });
    }
  }
  return result;
};