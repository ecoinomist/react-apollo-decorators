'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (query, options, props) {
  var operationVariables = query.definitions[0].variableDefinitions || [];
  var variables = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = operationVariables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var operationVariable = _step.value;
      var variable = operationVariable.variable,
          type = operationVariable.type;

      if (!variable.name || !variable.name.value) continue;

      if (typeof props[variable.name.value] !== 'undefined') {
        variables[variable.name.value] = props[variable.name.value];
        continue;
      }

      if (props.params && typeof props.params[variable.name.value] !== 'undefined') {
        variables[variable.name.value] = props.params[variable.name.value];
        continue;
      }

      if (props.navigation && props.navigation.state && props.navigation.state.params && typeof props.navigation.state.params[variable.name.value] !== 'undefined') {
        variables[variable.name.value] = props.navigation.state.params[variable.name.value];
        continue;
      }

      // allow optional props
      if (type.kind !== 'NonNullType') {
        variables[variable.name.value] = null;
        continue;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return variables;
};