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
	    var data, params, result;
	    return _regenerator2.default.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            data = JSON.parse(event.body);
	            params = {
	              TableName: 'fightdb_games',
	              Item: {
	                gameId: _uuid2.default.v1(),
	                title: data.title,
	                picture: data.picture,
	                characters: data.characters,
	                createdAt: new Date().getTime()
	              }
	            };
	            _context.prev = 2;
	            _context.next = 5;
	            return dynamoDbLib.call('put', params);

	          case 5:
	            result = _context.sent;

	            callback(null, (0, _response.success)(params.Item));
	            _context.next = 12;
	            break;

	          case 9:
	            _context.prev = 9;
	            _context.t0 = _context['catch'](2);

	            callback(null, (0, _response.failure)({ status: false }));

	          case 12:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[2, 9]]);
	  }));

	  return function main(_x, _x2, _x3) {
	    return _ref.apply(this, arguments);
	  };
	}();

	var _uuid = __webpack_require__(3);

	var _uuid2 = _interopRequireDefault(_uuid);

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("uuid");

/***/ })
/******/ ])));