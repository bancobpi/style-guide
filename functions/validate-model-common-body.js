'use strict';

module.exports = (input, options, context) => {
  const url = "commons-api-definitions/nodes/models/common-body.yaml";

  if(input.$ref){
    const ref = input.$ref.toString().toLowerCase();
    if(ref.includes(url)){
      return []
    }else{
      return [
        {
          message: "The first attribute in a Resource MUST be a $ref to designLibrary/common-body."
        }
      ]
    }
  }else{
    return [
      {
        message: "The first attribute in a Resource MUST be a $ref to designLibrary/common-body."
      }
    ]
  }
};
