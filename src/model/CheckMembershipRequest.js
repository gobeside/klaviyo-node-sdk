/*
 * Klaviyo API
 * Empowering creators to own their destiny
 *
 * OpenAPI spec version: 2022.03.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';

/**
 * The CheckMembershipRequest model module.
 * @module model/CheckMembershipRequest
 * @version 2022.03.29
 */
export class CheckMembershipRequest {
  /**
   * Constructs a new <code>CheckMembershipRequest</code>.
   * @alias module:model/CheckMembershipRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CheckMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckMembershipRequest} obj Optional instance to populate.
   * @return {module:model/CheckMembershipRequest} The populated <code>CheckMembershipRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CheckMembershipRequest();
      if (data.hasOwnProperty('emails'))
        obj.emails = ApiClient.convertToType(data['emails'], ['String']);
      if (data.hasOwnProperty('phone_numbers'))
        obj.phoneNumbers = ApiClient.convertToType(data['phone_numbers'], ['String']);
      if (data.hasOwnProperty('push_tokens'))
        obj.pushTokens = ApiClient.convertToType(data['push_tokens'], ['String']);
    }
    return obj;
  }
}

/**
 * List of email addresses
 * @member {Array.<String>} emails
 */
CheckMembershipRequest.prototype.emails = undefined;

/**
 * List of phone numbers
 * @member {Array.<String>} phoneNumbers
 */
CheckMembershipRequest.prototype.phoneNumbers = undefined;

/**
 * @member {Array.<String>} pushTokens
 */
CheckMembershipRequest.prototype.pushTokens = undefined;

