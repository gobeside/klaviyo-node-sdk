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
import {MetricIntegration} from './MetricIntegration.js';

/**
 * The MetricExportMetric model module.
 * @module model/MetricExportMetric
 * @version 2022.03.29
 */
export class MetricExportMetric {
  /**
   * Constructs a new <code>MetricExportMetric</code>.
   * @alias module:model/MetricExportMetric
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MetricExportMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricExportMetric} obj Optional instance to populate.
   * @return {module:model/MetricExportMetric} The populated <code>MetricExportMetric</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricExportMetric();
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('integration'))
        obj.integration = MetricIntegration.constructFromObject(data['integration']);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} _object
 */
MetricExportMetric.prototype._object = undefined;

/**
 * @member {String} id
 */
MetricExportMetric.prototype.id = undefined;

/**
 * @member {String} name
 */
MetricExportMetric.prototype.name = undefined;

/**
 * @member {module:model/MetricIntegration} integration
 */
MetricExportMetric.prototype.integration = undefined;

/**
 * @member {String} created
 */
MetricExportMetric.prototype.created = undefined;

/**
 * @member {String} updated
 */
MetricExportMetric.prototype.updated = undefined;
