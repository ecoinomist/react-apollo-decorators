'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = function (query, userConfig) {
  return function (ComposedComponent) {
    var _this = this;

    var defaultConfig = { options: {} };
    var config = (0, _extends4.default)({}, defaultConfig, userConfig);

    var changeMutate = function changeMutate(oldMutate) {
      return function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(variables) {
          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options.variables = (0, _filterObject2.default)((0, _cloneDeep2.default)(variables), '__typename');
                  _context.next = 3;
                  return oldMutate.apply(undefined, [options].concat(args));

                case 3:
                  result = _context.sent;
                  return _context.abrupt('return', result.data);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    };

    var FinalComponent = (0, _reactApollo.graphql)(query, (0, _extends4.default)({}, config, {
      props: function props(_ref2) {
        var ownProps = _ref2.ownProps,
            mutate = _ref2.mutate;

        var mutationName = query.definitions[0].name.value;
        return (0, _extends4.default)({}, ownProps, (0, _defineProperty3.default)({}, mutationName, changeMutate(mutate)));
      }
    }))(ComposedComponent);

    FinalComponent.propTypes = ComposedComponent.propTypes;
    FinalComponent.defaultProps = ComposedComponent.defaultProps;
    FinalComponent.navigationOptions = ComposedComponent.navigationOptions;

    return FinalComponent;
  };
};

var _reactApollo = require('react-apollo');

var _filterObject = require('./filterObject');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }