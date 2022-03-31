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
 * The MetricTimelinePerson model module.
 * @module model/MetricTimelinePerson
 * @version 2022.03.29
 */
export class MetricTimelinePerson {
  /**
   * Constructs a new <code>MetricTimelinePerson</code>.
   * @alias module:model/MetricTimelinePerson
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MetricTimelinePerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimelinePerson} obj Optional instance to populate.
   * @return {module:model/MetricTimelinePerson} The populated <code>MetricTimelinePerson</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricTimelinePerson();
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} _object
 */
MetricTimelinePerson.prototype._object = undefined;

/**
 * @member {String} id
 */
MetricTimelinePerson.prototype.id = undefined;

