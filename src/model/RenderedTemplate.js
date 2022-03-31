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
 * The RenderedTemplate model module.
 * @module model/RenderedTemplate
 * @version 2022.03.29
 */
export class RenderedTemplate {
  /**
   * Constructs a new <code>RenderedTemplate</code>.
   * @alias module:model/RenderedTemplate
   * @class
   * @extends 
   */
  constructor() {
  }

  /**
   * Constructs a <code>RenderedTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderedTemplate} obj Optional instance to populate.
   * @return {module:model/RenderedTemplate} The populated <code>RenderedTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RenderedTemplate();
      ApiClient.constructFromObject(data, obj, '');
    }
    return obj;
  }
}
