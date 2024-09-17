'use strict';

function findKeyWithValue(obj, key, value) {
  // Check if the current object has the key with the desired value
  if (obj.hasOwnProperty(key) && obj[key] === value) {
    return true;
  }
  
  // Check for arrays
  if (Array.isArray(obj)) {
    for (let item of obj) {
      if (findKeyWithValue(item, key, value)) {
        return true;
      }
    }
  }
  
  // Traverse the object properties
  for (let k in obj) {
    if (obj[k] && typeof obj[k] === 'object') {
      // Recursively search in nested objects
      if (findKeyWithValue(obj[k], key, value)) {
        return true;
      }
    }
  }
  
  // Return false if key-value pair is not found
  return false;
}

module.exports = (input, options, context) => {
  
  // Validates if some of the entities is an account canonical type
  if(findKeyWithValue(input, "x-bpi-project-origin", "canonical-types-accounts")) {
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
