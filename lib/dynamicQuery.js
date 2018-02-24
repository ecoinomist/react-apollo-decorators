'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['', ''], ['', '']);

exports.default = function (getQuery, userOptions) {
  return function (ComposedComponent) {
    var Composer = function (_React$Component) {
      (0, _inherits3.default)(Composer, _React$Component);

      function Composer() {
        (0, _classCallCheck3.default)(this, Composer);
        return (0, _possibleConstructorReturn3.default)(this, (Composer.__proto__ || Object.getPrototypeOf(Composer)).apply(this, arguments));
      }

      (0, _createClass3.default)(Composer, [{
        key: 'getComponent',
        value: function getComponent(props) {
          var query = getQuery(props);
          return (0, _withGraphQL2.default)((0, _graphqlTag2.default)(_templateObject, query), userOptions)(ComposedComponent);
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.component = this.getComponent(this.props);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (getQuery(this.props) !== getQuery(nextProps)) {
            this.component = this.getComponent(nextProps);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(this.component, this.props);
        }
      }]);
      return Composer;
    }(_react2.default.Component);

    return Composer;
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withGraphQL = require('./withGraphQL');

var _withGraphQL2 = _interopRequireDefault(_withGraphQL);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }