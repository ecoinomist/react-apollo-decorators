'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFragments = undefined;

exports.default = function (doc, fragments) {
  return function (ComposedComponent) {
    var fragment = (0, _apolloClient.createFragment)(doc, fragments);
    var name = doc.definitions[0].name.value;
    ComposedComponent.fragmentName = name;
    ComposedComponent.fragment = fragment;
    return ComposedComponent;
  };
};

var _apolloClient = require('apollo-client');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFragments = exports.getFragments = function getFragments(fragments) {
  if (!fragments) return;
  var present = [];
  return fragments.filter(function (fragment) {
    var name = fragment.name.value;
    if (_underscore2.default.contains(present, name)) {
      return false;
    }
    present.push(name);
    return true;
  });
};