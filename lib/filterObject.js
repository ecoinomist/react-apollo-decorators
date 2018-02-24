'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterObject;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterObject(obj, key) {
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if ((0, _isPlainObject2.default)(obj[i]) || (0, _isArray2.default)(obj[i])) {
      filterObject(obj[i], key);
    } else if (i === key) {
      delete obj[key];
    }
  }
  return obj;
}