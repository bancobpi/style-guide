export default (targetValue,options, context) => {
    const result = [];

    if (targetValue === null || typeof targetValue !== 'object') {
      return result;
    }

    const pathComplete = context.path.toString().split(",");
    const verb = pathComplete[2];
    var name = pathComplete[2];
    const splitId = pathComplete[1].split("/");
    const endpoint = pathComplete[1];

    if(verb == "post" && endpoint.startsWith("/search")) {
      name = verb + "ForSearch";
    } 
    else if (verb == "get" || verb == "post") {
      if (splitId.length == 3) {
        name = verb + "ById";
      }else if (splitId.length == 4) {
        name = verb + "WithId";
      }
    }

    var validation = options.paths.includes(name)

    if (!validation){
      result.push({
        message: " The path MUST not be " + name
      });
    }
  return result;
};