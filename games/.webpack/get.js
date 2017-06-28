(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.main = undefined;

	var _regenerator = __webpack_require__(1);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(2);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var main = exports.main = function () {
	  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event, context, callback) {
	    var params, result;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            params = {
	              TableName: 'fightdb_games',
	              Key: {
	                gameId: event.pathParameters.id
	              }
	            };
	            _context.prev = 1;
	            _context.next = 4;
	            return dynamoDbLib.call('get', params);

	          case 4:
	            result = _context.sent;

	            if (result.Item) {
	              callback(null, (0, _response.success)(result.Item));
	            } else {
	              callback(null, (0, _response.failure)({ status: false, error: 'Item not found.' }));
	            }
	            _context.next = 11;
	            break;

	          case 8:
	            _context.prev = 8;
	            _context.t0 = _context['catch'](1);

	            callback(null, (0, _response.failure)({ status: false }));

	          case 11:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[1, 8]]);
	  }));

	  return function main(_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

	var _dynamodb = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"libs/dynamodb\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var dynamoDbLib = _interopRequireWildcard(_dynamodb);

	var _response = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"libs/response\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ })
/******/ ])));