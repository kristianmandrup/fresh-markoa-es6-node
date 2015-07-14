var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Another = _interopRequire(require("./another"));

var MyLibrary = {
  anotherFn: Another.anotherFn,
  mainFn: function mainFn() {
    return "hello";
  }
};

module.exports = MyLibrary;