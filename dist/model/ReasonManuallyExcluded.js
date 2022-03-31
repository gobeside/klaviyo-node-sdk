"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReasonManuallyExcluded = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReasonManuallyExcluded model module.
 * @module model/ReasonManuallyExcluded
 * @version 2022.03.29
 */
var ReasonManuallyExcluded = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReasonManuallyExcluded</code>.
   * @alias module:model/ReasonManuallyExcluded
   * @class
   */
  function ReasonManuallyExcluded() {
    _classCallCheck(this, ReasonManuallyExcluded);
  }
  /**
   * Constructs a <code>ReasonManuallyExcluded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReasonManuallyExcluded} obj Optional instance to populate.
   * @return {module:model/ReasonManuallyExcluded} The populated <code>ReasonManuallyExcluded</code> instance.
   */


  _createClass(ReasonManuallyExcluded, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReasonManuallyExcluded();
      }

      return obj;
    }
  }]);

  return ReasonManuallyExcluded;
}();

exports.ReasonManuallyExcluded = ReasonManuallyExcluded;