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
import {ApiClient} from './ApiClient.js';
import {Ascending} from './model/Ascending.js';
import {Campaign} from './model/Campaign.js';
import {CampaignCampaignIdBody} from './model/CampaignCampaignIdBody.js';
import {CampaignIdCloneBody} from './model/CampaignIdCloneBody.js';
import {CampaignIdScheduleBody} from './model/CampaignIdScheduleBody.js';
import {CampaignTemplate} from './model/CampaignTemplate.js';
import {CheckMembershipRequest} from './model/CheckMembershipRequest.js';
import {CheckMembershipResponse} from './model/CheckMembershipResponse.js';
import {CheckMembershipResponseInner} from './model/CheckMembershipResponseInner.js';
import {DeleteEmail} from './model/DeleteEmail.js';
import {DeletePerson} from './model/DeletePerson.js';
import {DeletePhone} from './model/DeletePhone.js';
import {DeprecatedGetListResponse} from './model/DeprecatedGetListResponse.js';
import {DeprecatedGetListResponseData} from './model/DeprecatedGetListResponseData.js';
import {Descending} from './model/Descending.js';
import {EmailtemplateTemplateIdBody} from './model/EmailtemplateTemplateIdBody.js';
import {GlobalExclusionResponseData} from './model/GlobalExclusionResponseData.js';
import {GlobalExclusionResponseDataData} from './model/GlobalExclusionResponseDataData.js';
import {IdentifyPayload} from './model/IdentifyPayload.js';
import {IdentifyPayloadPost} from './model/IdentifyPayloadPost.js';
import {IdentifyPayloadProperties} from './model/IdentifyPayloadProperties.js';
import {InlineResponse200} from './model/InlineResponse200.js';
import {InlineResponse2001} from './model/InlineResponse2001.js';
import {InlineResponse20010} from './model/InlineResponse20010.js';
import {InlineResponse20011} from './model/InlineResponse20011.js';
import {InlineResponse20011Data} from './model/InlineResponse20011Data.js';
import {InlineResponse20012} from './model/InlineResponse20012.js';
import {InlineResponse20013} from './model/InlineResponse20013.js';
import {InlineResponse2002} from './model/InlineResponse2002.js';
import {InlineResponse2003} from './model/InlineResponse2003.js';
import {InlineResponse2004} from './model/InlineResponse2004.js';
import {InlineResponse2005} from './model/InlineResponse2005.js';
import {InlineResponse2006} from './model/InlineResponse2006.js';
import {InlineResponse2007} from './model/InlineResponse2007.js';
import {InlineResponse2007Records} from './model/InlineResponse2007Records.js';
import {InlineResponse2008} from './model/InlineResponse2008.js';
import {InlineResponse2008Records} from './model/InlineResponse2008Records.js';
import {InlineResponse2009} from './model/InlineResponse2009.js';
import {ListIdMembersBody} from './model/ListIdMembersBody.js';
import {ListIdMembersBody1} from './model/ListIdMembersBody1.js';
import {ListIdSubscribeBody} from './model/ListIdSubscribeBody.js';
import {ListIdSubscribeBody1} from './model/ListIdSubscribeBody1.js';
import {ListListIdBody} from './model/ListListIdBody.js';
import {ListSubscribePostResponseData} from './model/ListSubscribePostResponseData.js';
import {ListSubscribePostResponseDataInner} from './model/ListSubscribePostResponseDataInner.js';
import {MeasurementCount} from './model/MeasurementCount.js';
import {MeasurementSum} from './model/MeasurementSum.js';
import {MeasurementUnique} from './model/MeasurementUnique.js';
import {MeasurementValue} from './model/MeasurementValue.js';
import {Metric} from './model/Metric.js';
import {MetricExport} from './model/MetricExport.js';
import {MetricExportData} from './model/MetricExportData.js';
import {MetricExportMetric} from './model/MetricExportMetric.js';
import {MetricExportResults} from './model/MetricExportResults.js';
import {MetricIntegration} from './model/MetricIntegration.js';
import {MetricTimeline} from './model/MetricTimeline.js';
import {MetricTimelineData} from './model/MetricTimelineData.js';
import {MetricTimelineEventProperties} from './model/MetricTimelineEventProperties.js';
import {MetricTimelinePerson} from './model/MetricTimelinePerson.js';
import {Model200ok} from './model/Model200ok.js';
import {OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD} from './model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD.js';
import {OneOftrackPayloadPropertiesYOURCUSTOMFIELD} from './model/OneOftrackPayloadPropertiesYOURCUSTOMFIELD.js';
import {OneOftrackPayloadTime} from './model/OneOftrackPayloadTime.js';
import {PeopleExchangeBody} from './model/PeopleExchangeBody.js';
import {PeopleExclusionsBody} from './model/PeopleExclusionsBody.js';
import {Person} from './model/Person.js';
import {PrivacyEmail} from './model/PrivacyEmail.js';
import {PrivacyId} from './model/PrivacyId.js';
import {PrivacyPhone} from './model/PrivacyPhone.js';
import {ReasonBounced} from './model/ReasonBounced.js';
import {ReasonInvalidEmail} from './model/ReasonInvalidEmail.js';
import {ReasonManuallyExcluded} from './model/ReasonManuallyExcluded.js';
import {ReasonReportedSpam} from './model/ReasonReportedSpam.js';
import {ReasonUnsubscribed} from './model/ReasonUnsubscribed.js';
import {RenderedTemplate} from './model/RenderedTemplate.js';
import {RenderedtemplateData} from './model/RenderedtemplateData.js';
import {SinceInteger} from './model/SinceInteger.js';
import {SinceString} from './model/SinceString.js';
import {StringArray} from './model/StringArray.js';
import {Template} from './model/Template.js';
import {TemplateIdCloneBody} from './model/TemplateIdCloneBody.js';
import {TemplateIdRenderBody} from './model/TemplateIdRenderBody.js';
import {TemplateIdSendBody} from './model/TemplateIdSendBody.js';
import {TrackPayload} from './model/TrackPayload.js';
import {TrackPayloadCustomerProperties} from './model/TrackPayloadCustomerProperties.js';
import {TrackPayloadPost} from './model/TrackPayloadPost.js';
import {TrackPayloadProperties} from './model/TrackPayloadProperties.js';
import {UnitDay} from './model/UnitDay.js';
import {UnitMonth} from './model/UnitMonth.js';
import {UnitWeek} from './model/UnitWeek.js';
import {V1CampaignsBody} from './model/V1CampaignsBody.js';
import {V1EmailtemplatesBody} from './model/V1EmailtemplatesBody.js';
import {V2ListsBody} from './model/V2ListsBody.js';

import {
    Profiles,
    TrackIdentify,
    Templates,
    ListsSegments,
    DataPrivacy,
    Campaigns,
    Metrics
} from "./clientWrapper.js";

/**
* Empowering_creators_to_own_their_destiny.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var KlaviyoSdk = require('index'); // See note below*.
* var xxxSvc = new KlaviyoSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new KlaviyoSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new KlaviyoSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new KlaviyoSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2022.03.29
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Ascending model constructor.
     * @property {module:model/Ascending}
     */
    Ascending,

    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign,

    /**
     * The CampaignCampaignIdBody model constructor.
     * @property {module:model/CampaignCampaignIdBody}
     */
    CampaignCampaignIdBody,

    /**
     * The CampaignIdCloneBody model constructor.
     * @property {module:model/CampaignIdCloneBody}
     */
    CampaignIdCloneBody,

    /**
     * The CampaignIdScheduleBody model constructor.
     * @property {module:model/CampaignIdScheduleBody}
     */
    CampaignIdScheduleBody,

    /**
     * The CampaignTemplate model constructor.
     * @property {module:model/CampaignTemplate}
     */
    CampaignTemplate,

    /**
     * The CheckMembershipRequest model constructor.
     * @property {module:model/CheckMembershipRequest}
     */
    CheckMembershipRequest,

    /**
     * The CheckMembershipResponse model constructor.
     * @property {module:model/CheckMembershipResponse}
     */
    CheckMembershipResponse,

    /**
     * The CheckMembershipResponseInner model constructor.
     * @property {module:model/CheckMembershipResponseInner}
     */
    CheckMembershipResponseInner,

    /**
     * The DeleteEmail model constructor.
     * @property {module:model/DeleteEmail}
     */
    DeleteEmail,

    /**
     * The DeletePerson model constructor.
     * @property {module:model/DeletePerson}
     */
    DeletePerson,

    /**
     * The DeletePhone model constructor.
     * @property {module:model/DeletePhone}
     */
    DeletePhone,

    /**
     * The DeprecatedGetListResponse model constructor.
     * @property {module:model/DeprecatedGetListResponse}
     */
    DeprecatedGetListResponse,

    /**
     * The DeprecatedGetListResponseData model constructor.
     * @property {module:model/DeprecatedGetListResponseData}
     */
    DeprecatedGetListResponseData,

    /**
     * The Descending model constructor.
     * @property {module:model/Descending}
     */
    Descending,

    /**
     * The EmailtemplateTemplateIdBody model constructor.
     * @property {module:model/EmailtemplateTemplateIdBody}
     */
    EmailtemplateTemplateIdBody,

    /**
     * The GlobalExclusionResponseData model constructor.
     * @property {module:model/GlobalExclusionResponseData}
     */
    GlobalExclusionResponseData,

    /**
     * The GlobalExclusionResponseDataData model constructor.
     * @property {module:model/GlobalExclusionResponseDataData}
     */
    GlobalExclusionResponseDataData,

    /**
     * The IdentifyPayload model constructor.
     * @property {module:model/IdentifyPayload}
     */
    IdentifyPayload,

    /**
     * The IdentifyPayloadPost model constructor.
     * @property {module:model/IdentifyPayloadPost}
     */
    IdentifyPayloadPost,

    /**
     * The IdentifyPayloadProperties model constructor.
     * @property {module:model/IdentifyPayloadProperties}
     */
    IdentifyPayloadProperties,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20011Data model constructor.
     * @property {module:model/InlineResponse20011Data}
     */
    InlineResponse20011Data,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2007Records model constructor.
     * @property {module:model/InlineResponse2007Records}
     */
    InlineResponse2007Records,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2008Records model constructor.
     * @property {module:model/InlineResponse2008Records}
     */
    InlineResponse2008Records,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The ListIdMembersBody model constructor.
     * @property {module:model/ListIdMembersBody}
     */
    ListIdMembersBody,

    /**
     * The ListIdMembersBody1 model constructor.
     * @property {module:model/ListIdMembersBody1}
     */
    ListIdMembersBody1,

    /**
     * The ListIdSubscribeBody model constructor.
     * @property {module:model/ListIdSubscribeBody}
     */
    ListIdSubscribeBody,

    /**
     * The ListIdSubscribeBody1 model constructor.
     * @property {module:model/ListIdSubscribeBody1}
     */
    ListIdSubscribeBody1,

    /**
     * The ListListIdBody model constructor.
     * @property {module:model/ListListIdBody}
     */
    ListListIdBody,

    /**
     * The ListSubscribePostResponseData model constructor.
     * @property {module:model/ListSubscribePostResponseData}
     */
    ListSubscribePostResponseData,

    /**
     * The ListSubscribePostResponseDataInner model constructor.
     * @property {module:model/ListSubscribePostResponseDataInner}
     */
    ListSubscribePostResponseDataInner,

    /**
     * The MeasurementCount model constructor.
     * @property {module:model/MeasurementCount}
     */
    MeasurementCount,

    /**
     * The MeasurementSum model constructor.
     * @property {module:model/MeasurementSum}
     */
    MeasurementSum,

    /**
     * The MeasurementUnique model constructor.
     * @property {module:model/MeasurementUnique}
     */
    MeasurementUnique,

    /**
     * The MeasurementValue model constructor.
     * @property {module:model/MeasurementValue}
     */
    MeasurementValue,

    /**
     * The Metric model constructor.
     * @property {module:model/Metric}
     */
    Metric,

    /**
     * The MetricExport model constructor.
     * @property {module:model/MetricExport}
     */
    MetricExport,

    /**
     * The MetricExportData model constructor.
     * @property {module:model/MetricExportData}
     */
    MetricExportData,

    /**
     * The MetricExportMetric model constructor.
     * @property {module:model/MetricExportMetric}
     */
    MetricExportMetric,

    /**
     * The MetricExportResults model constructor.
     * @property {module:model/MetricExportResults}
     */
    MetricExportResults,

    /**
     * The MetricIntegration model constructor.
     * @property {module:model/MetricIntegration}
     */
    MetricIntegration,

    /**
     * The MetricTimeline model constructor.
     * @property {module:model/MetricTimeline}
     */
    MetricTimeline,

    /**
     * The MetricTimelineData model constructor.
     * @property {module:model/MetricTimelineData}
     */
    MetricTimelineData,

    /**
     * The MetricTimelineEventProperties model constructor.
     * @property {module:model/MetricTimelineEventProperties}
     */
    MetricTimelineEventProperties,

    /**
     * The MetricTimelinePerson model constructor.
     * @property {module:model/MetricTimelinePerson}
     */
    MetricTimelinePerson,

    /**
     * The Model200ok model constructor.
     * @property {module:model/Model200ok}
     */
    Model200ok,

    /**
     * The OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD model constructor.
     * @property {module:model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD}
     */
    OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD,

    /**
     * The OneOftrackPayloadPropertiesYOURCUSTOMFIELD model constructor.
     * @property {module:model/OneOftrackPayloadPropertiesYOURCUSTOMFIELD}
     */
    OneOftrackPayloadPropertiesYOURCUSTOMFIELD,

    /**
     * The OneOftrackPayloadTime model constructor.
     * @property {module:model/OneOftrackPayloadTime}
     */
    OneOftrackPayloadTime,

    /**
     * The PeopleExchangeBody model constructor.
     * @property {module:model/PeopleExchangeBody}
     */
    PeopleExchangeBody,

    /**
     * The PeopleExclusionsBody model constructor.
     * @property {module:model/PeopleExclusionsBody}
     */
    PeopleExclusionsBody,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The PrivacyEmail model constructor.
     * @property {module:model/PrivacyEmail}
     */
    PrivacyEmail,

    /**
     * The PrivacyId model constructor.
     * @property {module:model/PrivacyId}
     */
    PrivacyId,

    /**
     * The PrivacyPhone model constructor.
     * @property {module:model/PrivacyPhone}
     */
    PrivacyPhone,

    /**
     * The ReasonBounced model constructor.
     * @property {module:model/ReasonBounced}
     */
    ReasonBounced,

    /**
     * The ReasonInvalidEmail model constructor.
     * @property {module:model/ReasonInvalidEmail}
     */
    ReasonInvalidEmail,

    /**
     * The ReasonManuallyExcluded model constructor.
     * @property {module:model/ReasonManuallyExcluded}
     */
    ReasonManuallyExcluded,

    /**
     * The ReasonReportedSpam model constructor.
     * @property {module:model/ReasonReportedSpam}
     */
    ReasonReportedSpam,

    /**
     * The ReasonUnsubscribed model constructor.
     * @property {module:model/ReasonUnsubscribed}
     */
    ReasonUnsubscribed,

    /**
     * The RenderedTemplate model constructor.
     * @property {module:model/RenderedTemplate}
     */
    RenderedTemplate,

    /**
     * The RenderedtemplateData model constructor.
     * @property {module:model/RenderedtemplateData}
     */
    RenderedtemplateData,

    /**
     * The SinceInteger model constructor.
     * @property {module:model/SinceInteger}
     */
    SinceInteger,

    /**
     * The SinceString model constructor.
     * @property {module:model/SinceString}
     */
    SinceString,

    /**
     * The StringArray model constructor.
     * @property {module:model/StringArray}
     */
    StringArray,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplateIdCloneBody model constructor.
     * @property {module:model/TemplateIdCloneBody}
     */
    TemplateIdCloneBody,

    /**
     * The TemplateIdRenderBody model constructor.
     * @property {module:model/TemplateIdRenderBody}
     */
    TemplateIdRenderBody,

    /**
     * The TemplateIdSendBody model constructor.
     * @property {module:model/TemplateIdSendBody}
     */
    TemplateIdSendBody,

    /**
     * The TrackPayload model constructor.
     * @property {module:model/TrackPayload}
     */
    TrackPayload,

    /**
     * The TrackPayloadCustomerProperties model constructor.
     * @property {module:model/TrackPayloadCustomerProperties}
     */
    TrackPayloadCustomerProperties,

    /**
     * The TrackPayloadPost model constructor.
     * @property {module:model/TrackPayloadPost}
     */
    TrackPayloadPost,

    /**
     * The TrackPayloadProperties model constructor.
     * @property {module:model/TrackPayloadProperties}
     */
    TrackPayloadProperties,

    /**
     * The UnitDay model constructor.
     * @property {module:model/UnitDay}
     */
    UnitDay,

    /**
     * The UnitMonth model constructor.
     * @property {module:model/UnitMonth}
     */
    UnitMonth,

    /**
     * The UnitWeek model constructor.
     * @property {module:model/UnitWeek}
     */
    UnitWeek,

    /**
     * The V1CampaignsBody model constructor.
     * @property {module:model/V1CampaignsBody}
     */
    V1CampaignsBody,

    /**
     * The V1EmailtemplatesBody model constructor.
     * @property {module:model/V1EmailtemplatesBody}
     */
    V1EmailtemplatesBody,

    /**
     * The V2ListsBody model constructor.
     * @property {module:model/V2ListsBody}
     */
    V2ListsBody,

    /**
     * The Profiles object.
     * @property {module:api/ProfilesApi}
     */
    Profiles,

    /**
     * The Profiles object.
     * @property {module:api/TrackIdentifyApi}
     */
    TrackIdentify,

    /**
     * The Profiles object.
     * @property {module:api/TemplatesApi}
     */
    Templates,

    /**
     * The Profiles object.
     * @property {module:api/ListsSegmentsApi}
     */
    ListsSegments,

    /**
     * The Profiles object.
     * @property {module:api/DataPrivacyApi}
     */
    DataPrivacy,

    /**
     * The Profiles object.
     * @property {module:api/CampaignsApi}
     */
    Campaigns,

    /**
     * The Profiles object.
     * @property {module:api/MetricsApi}
     */
    Metrics,
};