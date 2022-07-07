'use strict';

export default (targetValue,options, context) => {
  const path = context.path.toString().split(",");
  const verb = path[2];
  const splitId = path[1].split("/");
  var name = path[2];
  const result = [];

  if (verb == "get" && splitId.length != 3){
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
