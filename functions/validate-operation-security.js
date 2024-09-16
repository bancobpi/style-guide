'use strict';

module.exports = (input, options, context) => {

  // Get the referenced entities
  const keys = Object.keys(context.documentInventory.graph.nodes);
  

  // Validates if some of the entities is an account canonical type
  if(keys.some(key => key.includes("canonical-types-accounts"))) {
    let gasContasValue = null;

    if(input["x-fast-operation-profiling"] !== undefined) {
      const functionalities = input["x-fast-operation-profiling"];

      // Validate if some of the properties is the gasContas
      if(functionalities.some(item => {
        if(item.functionality === 'security' && item.properties) {
          const prop = item.properties.find(prop => prop.key === 'gasContas');
          if(prop) {
            gasContasValue = prop.value;
            return true;
          }
        }
        return false;
      })) {
        // If gasContas is true, validate if there is a whatCondition property
        if(gasContasValue) {
          if(functionalities.some(item => {
            if(item.functionality === 'security' && item.properties) {
              const prop = item.properties.find(prop => prop.key === 'whatCondition');
              if(prop) {
                return true;
              }
            }
            return false;
          })) {
            return []
          }
          else {
            return [
              {
                message: "Validate if the whatCondition property should be included in this operation."
              }
            ]
          }
        }
      }
      else {
        return [
          {
            message: "Validate if the gasContas security property should be included in this operation."
          }
        ]
      }
    }
    else {
      return [
        {
          message: "Validate if the gasContas security property should be included in this operation."
        }
      ]
    }
  }
};
