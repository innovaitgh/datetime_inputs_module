"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeInput;

require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _dateFns2 = _interopRequireDefault(require("@date-io/date-fns"));

var _MuiPickersUtilsProvider = _interopRequireDefault(require("@material-ui/pickers/MuiPickersUtilsProvider"));

var _KeyboardDatePicker = _interopRequireDefault(require("@material-ui/pickers/KeyboardDatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TimeInput(_ref) {
  var selectedDate = _ref.selectedDate,
      setSelectedDate = _ref.setSelectedDate,
      label = _ref.label,
      others = _objectWithoutProperties(_ref, ["selectedDate", "setSelectedDate", "label"]);

  return /*#__PURE__*/_react["default"].createElement(_MuiPickersUtilsProvider["default"], {
    utils: _dateFns2["default"]
  }, /*#__PURE__*/_react["default"].createElement(KeyboardTimePicker, _extends({
    label: label,
    value: selectedDate,
    onChange: setSelectedDate
  }, others)));
}

TimeInput.defaultProps = {
  margin: "normal"
};