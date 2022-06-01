'use strict';

export default (targetValue,options, context) => {
  const result = [];

  if (targetValue === null || typeof targetValue !== 'object') {
    return result;
  }

  const path = context.path.toString().split(",");
  const verb = path[2];
  const splitId = path[1].split("/");
  var name = path[2];

  if (verb == "get" || verb == "post") {
    if (splitId.length == 3) {
      name = verb + "ById";
    }else if (splitId.length == 4) {
      name = verb + "WithId";
    }
  }

  if(!name.includes("ById")){
    const pagintationParams = targetValue.filter(
      (param) =>
        param.name && (param.in === 'query' && (param.name.toLowerCase() === 'pagenumber' || param.name.toLowerCase() === 'pagesize')),
    );

    if (pagintationParams.length !== 2) {
      return [
        {
          message: `GET List MUST have a queryParameters of pagination.`,
        },
      ];
    }
  }
  

  return [];
};