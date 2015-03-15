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
System.get("../dev/number-util-script.js" + '');
