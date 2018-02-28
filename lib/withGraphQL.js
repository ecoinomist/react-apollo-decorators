'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (query) {
  var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (ComposedComponent) {
    var defaultConfig = {
      loading: _react2.default.createElement(_Loading2.default, null),
      errorComponent: _Error2.default,
      tryRefetch: 1000
    };
    var config = (0, _extends3.default)({}, defaultConfig, userConfig);

    var GraphQLQuery = function (_React$Component) {
      (0, _inherits3.default)(GraphQLQuery, _React$Component);

      function GraphQLQuery(props) {
        (0, _classCallCheck3.default)(this, GraphQLQuery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GraphQLQuery.__proto__ || Object.getPrototypeOf(GraphQLQuery)).call(this, props));

        _this.debouncedTryRefetch = (0, _debounce2.default)(_this.tryRefetch.bind(_this), config.tryRefetch);
        return _this;
      }

      (0, _createClass3.default)(GraphQLQuery, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          if (this.props.error && this.props.error.networkError) {
            this.debouncedTryRefetch();
          }
        }
      }, {
        key: 'tryRefetch',
        value: function () {
          var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (config.tryRefetch) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt('return');

                  case 2:
                    _context.next = 4;
                    return (0, _sleep2.default)(config.tryRefetch);

                  case 4:
                    if (!(!this.props.error || !this.props.error.networkError)) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt('return');

                  case 6:
                    _context.prev = 6;
                    _context.next = 9;
                    return this.props.refetch();

                  case 9:
                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context['catch'](6);

                    console.log('Error refetching:', _context.t0);

                  case 14:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 11]]);
          }));

          function tryRefetch() {
            return _ref.apply(this, arguments);
          }

          return tryRefetch;
        }()
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.interval) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: 'renderLoading',
        value: function renderLoading() {
          if (!config.loading) return this.renderComposed();
          if (userConfig.loading) return config.loading;
          return global.apolloLoadingComponent ? _react2.default.createElement(global.apolloLoadingComponent, null) : config.loading;
        }
      }, {
        key: 'renderNetworkError',
        value: function renderNetworkError() {
          if (!global.apolloNetworkErrorComponent && config.loading) return this.renderLoading();
          var GlobalComponent = global.apolloNetworkErrorComponent;
          var ConfigComponent = userConfig.networkErrorComponent;
          if (ConfigComponent !== null) {
            if (ConfigComponent) return _react2.default.createElement(ConfigComponent, null);
            return GlobalComponent ? _react2.default.createElement(GlobalComponent, null) : _react2.default.createElement(_NetworkError2.default, null);
          }
          return this.renderComposed();
        }
      }, {
        key: 'renderError',
        value: function renderError(error) {
          error = error || this.props.error;
          if (error.networkError) return this.renderNetworkError();
          return global.apolloErrorComponent ? _react2.default.createElement(global.apolloErrorComponent, { error: error }) : _react2.default.createElement(_Error2.default, { error: error });
        }
      }, {
        key: 'renderComposed',
        value: function renderComposed() {
          try {
            return _react2.default.createElement(ComposedComponent, this.props);
          } catch (error) {
            return this.renderError(error);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          if (this.props.networkStatus === 1 && Object.keys(this.props._data).length === 10 || this.props.networkStatus === 2) {
            return this.renderLoading();
          }

          if (this.props.error) return this.renderError();
          return this.renderComposed();
        }
      }]);
      return GraphQLQuery;
    }(_react2.default.Component);

    var FinalComponent = (0, _reactApollo.graphql)(query, (0, _extends3.default)({
      props: function props(_ref2) {
        var ownProps = _ref2.ownProps,
            data = _ref2.data;
        return (0, _extends3.default)({
          _data: data
        }, ownProps, data);
      }
    }, config, {
      options: function options(props) {
        var options = config.options;
        var userOptions = (typeof options === 'function' ? options(props) : options) || {};
        if (userOptions.pollInterval && !userOptions.fetchPolicy) {
          userOptions.fetchPolicy = 'network-only';
        }
        return (0, _extends3.default)({
          fetchPolicy: 'cache-and-network', // default option
          errorPolicy: 'all' }, userOptions, {
          variables: (0, _extends3.default)({}, (0, _getVariables2.default)(query, config, props), userOptions.variables || {})
        });
      }
    }))(GraphQLQuery);

    FinalComponent.propTypes = ComposedComponent.propTypes;
    FinalComponent.defaultProps = ComposedComponent.defaultProps;
    FinalComponent.navigationOptions = ComposedComponent.navigationOptions;

    return FinalComponent;
  };
};

var _reactApollo = require('react-apollo');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

var _getVariables = require('./getVariables');

var _getVariables2 = _interopRequireDefault(_getVariables);

var _sleep = require('./sleep');

var _sleep2 = _interopRequireDefault(_sleep);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _NetworkError = require('./NetworkError');

var _NetworkError2 = _interopRequireDefault(_NetworkError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }