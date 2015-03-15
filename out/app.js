System.registerModule("../dev/number-util-script.js", [], function() {
  "use strict";
  var __moduleName = "../dev/number-util-script.js";
  var NumberUtil = {getSquareOfNumber: function(number) {
      return number * number;
    }};
  return {get NumberUtil() {
      return NumberUtil;
    }};
});
System.registerModule("../dev/app.js", [], function() {
  "use strict";
  var __moduleName = "../dev/app.js";
  var NumberUtil = System.get("../dev/number-util-script.js").NumberUtil;
  var result = NumberUtil.getSquareOfNumber(5);
  document.getElementById("result").innerText = "Result: " + result;
  return {};
});
System.get("../dev/app.js" + '');
