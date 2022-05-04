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

    if (typeof options[name] !== 'undefined'){
      var blockOne = options[name][0];
      let blockOneHttpCodesValidate = blockOne.split(',').map(Number);
      var blockTwo = "";
      let blockTwoHttpCodesValidate = [];
      const httpCodesValidate = [];
      let containsMoreThanOne = "";
      let foundOne = "";
      let missingHttp = "";
      let httpNotAccepted = "";
      let httpNotAccepted2 = "";

      if(options[name].length > 1){
        blockTwo = options[name][1];
        blockTwoHttpCodesValidate = blockTwo.split(',').map(Number);
      }

      for (const code of Object.keys(targetValue)) {
        httpCodesValidate.push(parseInt(code));
      }

      if(blockTwoHttpCodesValidate.length > 0){
        containsMoreThanOne = blockOneHttpCodesValidate.filter(x => httpCodesValidate.includes(x));
        foundOne = blockOneHttpCodesValidate.some(r=> httpCodesValidate.includes(r))
        missingHttp = findDiff(blockTwoHttpCodesValidate,httpCodesValidate)
        httpNotAccepted = findDiff(httpCodesValidate,blockTwoHttpCodesValidate)
        httpNotAccepted2 = findDiff(httpNotAccepted,blockOneHttpCodesValidate)

        if(containsMoreThanOne.length > 1 || !foundOne || missingHttp.length>0 || httpNotAccepted2.length>0){
          result.push({
            message: name + " MUST have the http codes: " + blockOneHttpCodesValidate.toString().replace(/,/g, ' or ') + " and " + blockTwoHttpCodesValidate
          });
        }
      }else{
        missingHttp = findDiff(blockOneHttpCodesValidate,httpCodesValidate)
        httpNotAccepted = findDiff(httpCodesValidate,blockOneHttpCodesValidate)

        if(missingHttp.length>0 || httpNotAccepted.length>0){
          result.push({
            message: name + " MUST have the http codes: " + blockOneHttpCodesValidate
          });
        }
      }
  }
  return result;
};

function findDiff (A, B){
  return  A.filter(function (a) {
      return !B.includes(a);
  })
}
