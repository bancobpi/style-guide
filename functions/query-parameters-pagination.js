'use strict';

module.exports = (targetValue) => {
  if (!Array.isArray(targetValue)) {
    return [
      {
        message: `No array given, provide $.paths.*.*.parameters`,
      },
    ];
  }

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

  return [];
};