"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button"
  }, label);
}

Button.propTypes = {
  label: _propTypes.default.string.isRequired
};