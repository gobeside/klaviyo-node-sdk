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
 * The CampaignTemplate model module.
 * @module model/CampaignTemplate
 * @version 2022.03.29
 */
export class CampaignTemplate {
  /**
   * Constructs a new <code>CampaignTemplate</code>.
   * @alias module:model/CampaignTemplate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignTemplate} obj Optional instance to populate.
   * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignTemplate();
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} _object
 */
CampaignTemplate.prototype._object = undefined;

/**
 * @member {String} id
 */
CampaignTemplate.prototype.id = undefined;

/**
 * @member {String} html
 */
CampaignTemplate.prototype.html = undefined;
