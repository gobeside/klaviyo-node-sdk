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
 * The ReasonReportedSpam model module.
 * @module model/ReasonReportedSpam
 * @version 2022.03.29
 */
export class ReasonReportedSpam {
  /**
   * Constructs a new <code>ReasonReportedSpam</code>.
   * @alias module:model/ReasonReportedSpam
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReasonReportedSpam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReasonReportedSpam} obj Optional instance to populate.
   * @return {module:model/ReasonReportedSpam} The populated <code>ReasonReportedSpam</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReasonReportedSpam();
    }
    return obj;
  }
}
