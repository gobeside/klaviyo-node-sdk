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
 * The InlineResponse20011Data model module.
 * @module model/InlineResponse20011Data
 * @version 2022.03.29
 */
export class InlineResponse20011Data {
  /**
   * Constructs a new <code>InlineResponse20011Data</code>.
   * @alias module:model/InlineResponse20011Data
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20011Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011Data} The populated <code>InlineResponse20011Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20011Data();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('customer_id'))
        obj.customerId = ApiClient.convertToType(data['customer_id'], 'String');
      if (data.hasOwnProperty('variation_id'))
        obj.variationId = ApiClient.convertToType(data['variation_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
InlineResponse20011Data.prototype.email = undefined;

/**
 * @member {String} status
 */
InlineResponse20011Data.prototype.status = undefined;

/**
 * @member {String} customerId
 */
InlineResponse20011Data.prototype.customerId = undefined;

/**
 * @member {String} variationId
 */
InlineResponse20011Data.prototype.variationId = undefined;

