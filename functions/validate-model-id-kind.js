'use strict';

module.exports = (input, options, context) => {
  const url = "commons-api-definitions/nodes/models/common-body.yaml";

  if(input[0].$ref){
    const ref = input[0].$ref.toString().toLowerCase();
    if(ref.includes(url)){
      return []
    }
  }

  for (const item of input) {
    if (item.properties && item.properties.id && item.properties.kind && 
      (item.properties.id.type === 'string' || item.properties.id.$ref) && 
      (item.properties.kind.type === 'string' || item.properties.kind.$ref)) {
      return []
    }
  }

  return [
    {
      message: "In a global resource, there MUST be an id and a kind attribute of type string."
    }
  ]
};