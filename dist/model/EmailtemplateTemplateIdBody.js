"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailtemplateTemplateIdBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EmailtemplateTemplateIdBody model module.
 * @module model/EmailtemplateTemplateIdBody
 * @version 2022.03.29
 */
var EmailtemplateTemplateIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailtemplateTemplateIdBody</code>.
   * @alias module:model/EmailtemplateTemplateIdBody
   * @class
   */
  function EmailtemplateTemplateIdBody() {
    _classCallCheck(this, EmailtemplateTemplateIdBody);
  }
  /**
   * Constructs a <code>EmailtemplateTemplateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailtemplateTemplateIdBody} obj Optional instance to populate.
   * @return {module:model/EmailtemplateTemplateIdBody} The populated <code>EmailtemplateTemplateIdBody</code> instance.
   */


  _createClass(EmailtemplateTemplateIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailtemplateTemplateIdBody();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
      }

      return obj;
    }
  }]);

  return EmailtemplateTemplateIdBody;
}();
/**
 * The new name of the email template.
 * @member {String} name
 */


exports.EmailtemplateTemplateIdBody = EmailtemplateTemplateIdBody;
EmailtemplateTemplateIdBody.prototype.name = undefined;
/**
 * The new HTML content for this template.
 * @member {String} html
 */

EmailtemplateTemplateIdBody.prototype.html = undefined;