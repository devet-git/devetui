"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("./Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Grid",
  component: _Grid.default
};
exports.default = _default;

var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Grid.default, null);
};

exports.Default = Default;