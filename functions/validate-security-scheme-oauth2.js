'use strict';

module.exports = (targetValue, options, context) => {
  const result = [];

  var found = false;
  if(targetValue.securitySchemes) {
    for (const security of Object.keys(targetValue.securitySchemes)) {
      const properties = targetValue.securitySchemes[security];
  
      for (const [key, value] of Object.entries(properties)) {
        if(key == "type" && value == "oauth2") {
          found = true;
          break;
        }
      }
    }
  }
  
  if(!found) {
    result.push({
      message: "At least one security scheme of type oauth2 MUST be defined in the components section"
    });
  }
  
  return result;
};
