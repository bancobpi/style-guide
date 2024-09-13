'use strict';

module.exports = (input, options, context) => {

  // Get the referenced entities
  const keys = Object.keys(context.documentInventory.graph.nodes);

  // Validates if some of the entities is a canonical type
  if(keys.some(key => key.includes("canonical-types-accounts"))) {
    if(input["x-fast-operation-profiling"] == undefined) {
      return [
        {
          message: "Validate if the current operation should include the gasContas tag."
        }
      ]
    }
    else if(input["x-fast-operation-profiling"] == true) {
      if(input["whatCondition"] == undefined) {
        return [
          {
            message: "Include the whatCondition rule id for this operation."
          }
        ]
      }
    }
  }
};
