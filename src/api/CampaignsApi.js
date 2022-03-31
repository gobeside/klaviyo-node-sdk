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
import {ApiClient} from "../ApiClient.js";
import {Campaign} from '../model/Campaign.js';
import {InlineResponse20010} from '../model/InlineResponse20010.js';
import {InlineResponse20011} from '../model/InlineResponse20011.js';
import {InlineResponse2009} from '../model/InlineResponse2009.js';

/**
* Campaigns service.
* @module api/CampaignsApi
* @version 2022.03.29
*/
export class CampaignsApi {

    /**
    * Constructs a new CampaignsApi. 
    * @alias module:api/CampaignsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Cancel a Campaign
     * Cancels a campaign send. Marks a campaign as cancelled regardless of it&#x27;s current status.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    cancelCampaign(campaignId) {

    
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling cancelCampaign");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Campaign;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Clone a Campaign
     * Creates a copy of a campaign. The new campaign starts as a draft.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    cloneCampaign(campaignId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling cloneCampaign");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'name': opts['name'],'list_id': opts['listId']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Campaign;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Create New Campaign
     * Creates a new campaign. The created campaign is a draft and is not automatically sent.
     * @param {Object} opts Optional parameters
     * @param {String} opts.listId 
     * @param {String} opts.templateId 
     * @param {String} opts.fromEmail 
     * @param {String} opts.fromName 
     * @param {String} opts.subject 
     * @param {String} opts.name 
     * @param {Boolean} opts.useSmartSending 
     * @param {Boolean} opts.addGoogleAnalytics 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    createCampaign(opts) {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'list_id': opts['listId'],'template_id': opts['templateId'],'from_email': opts['fromEmail'],'from_name': opts['fromName'],'subject': opts['subject'],'name': opts['name'],'use_smart_sending': opts['useSmartSending'],'add_google_analytics': opts['addGoogleAnalytics']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Campaign;

      return ApiClient.instance.callApi(
        '/v1/campaigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Campaign Info
     * Returns summary information for the campaign specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    getCampaignInfo(campaignId) {

    
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignInfo");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Campaign;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Campaign Recipients
     * Returns summary information about email recipients for the campaign specified that includes each recipients email, customer ID, and status.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count For pagination, the number of results to return. Max &#x3D; 25,000 (default to <.>)
     * @param {String} opts.sort Sort order to apply to results, either ascending or descending. Valid values are &#x60;asc&#x60; or &#x60;desc&#x60;. Defaults to &#x60;asc&#x60;. (default to <.>)
     * @param {String} opts.offset For pagination, if a response to this endpoint includes a &#x60;next_offset&#x60;, use that value to get the next page of recipients.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */
    getCampaignRecipients(campaignId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignRecipients");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        'count': opts['count'],'sort': opts['sort'],'offset': opts['offset']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20011;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Campaigns
     * Returns a list of all the campaigns you&#x27;ve created. The campaigns are returned in reverse sorted order by the time they were created.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page For pagination, which page of results to return. Default &#x3D; 0 (default to <.>)
     * @param {Number} opts.count For pagination, the number of results to return. Max &#x3D; 100 (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    getCampaigns(opts) {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'count': opts['count']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return ApiClient.instance.callApi(
        '/v1/campaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Schedule a Campaign
     * Schedules a campaign for a time in the future
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sendTime 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */
    scheduleCampaign(campaignId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling scheduleCampaign");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'send_time': opts['sendTime']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20010;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}/schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Send a Campaign Immediately
     * Queues a campaign for immediate delivery
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */
    sendCampaign(campaignId) {

    
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendCampaign");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20010;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Update Campaign
     * Updates details of a campaign. You can update a campaign&#x27;s name, subject, from email address, from name, template or list.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.listId 
     * @param {String} opts.templateId 
     * @param {String} opts.fromEmail 
     * @param {String} opts.fromName 
     * @param {String} opts.subject 
     * @param {String} opts.name 
     * @param {Boolean} opts.useSmartSending 
     * @param {Boolean} opts.addGoogleAnalytics 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */
    updateCampaign(campaignId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaign");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'list_id': opts['listId'],'template_id': opts['templateId'],'from_email': opts['fromEmail'],'from_name': opts['fromName'],'subject': opts['subject'],'name': opts['name'],'use_smart_sending': opts['useSmartSending'],'add_google_analytics': opts['addGoogleAnalytics']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Campaign;

      return ApiClient.instance.callApi(
        '/v1/campaign/{campaign_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}