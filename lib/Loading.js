'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_React$Component) {
  (0, _inherits3.default)(Loading, _React$Component);

  function Loading() {
    (0, _classCallCheck3.default)(this, Loading);
    return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loading, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        height: this.props.height,
        backgroundColor: '#EEEEEE',
        borderRadius: 3
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.getStyles() });
    }
  }]);
  return Loading;
}(_react2.default.Component);

Loading.propTypes = {
  height: _propTypes2.default.number
};
Loading.defaultProps = {
  height: 200
};
exports.default = Loading;