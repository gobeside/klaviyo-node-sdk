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
 * The CampaignIdCloneBody model module.
 * @module model/CampaignIdCloneBody
 * @version 2022.03.29
 */
export class CampaignIdCloneBody {
  /**
   * Constructs a new <code>CampaignIdCloneBody</code>.
   * @alias module:model/CampaignIdCloneBody
   * @class
   * @param name {String} The name for the new campaign. All other properties of the campaign will remain the same. Note, the template for the new campaign will be cloned from the existing template so changes to the existing campaign's content will not alter the content of the new campaign.
   * @param listId {String} The list you will send the campaign to.
   */
  constructor(name, listId) {
    this.name = name;
    this.listId = listId;
  }

  /**
   * Constructs a <code>CampaignIdCloneBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignIdCloneBody} obj Optional instance to populate.
   * @return {module:model/CampaignIdCloneBody} The populated <code>CampaignIdCloneBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignIdCloneBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('list_id'))
        obj.listId = ApiClient.convertToType(data['list_id'], 'String');
    }
    return obj;
  }
}

/**
 * The name for the new campaign. All other properties of the campaign will remain the same. Note, the template for the new campaign will be cloned from the existing template so changes to the existing campaign's content will not alter the content of the new campaign.
 * @member {String} name
 * @default 'Cloned Campaign'
 */
CampaignIdCloneBody.prototype.name = 'Cloned Campaign';

/**
 * The list you will send the campaign to.
 * @member {String} listId
 * @default 'LIST_ID'
 */
CampaignIdCloneBody.prototype.listId = 'LIST_ID';

