/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/regulatoryComplianceAssessmentsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a RegulatoryComplianceAssessments. */
export class RegulatoryComplianceAssessments {
  private readonly client: SecurityCenterContext;

  /**
   * Create a RegulatoryComplianceAssessments.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsListResponse>
   */
  list(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: Models.RegulatoryComplianceAssessmentsListOptionalParams): Promise<Models.RegulatoryComplianceAssessmentsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param callback The callback
   */
  list(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options: Models.RegulatoryComplianceAssessmentsListOptionalParams, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  list(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, options?: Models.RegulatoryComplianceAssessmentsListOptionalParams | msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): Promise<Models.RegulatoryComplianceAssessmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsListResponse>;
  }

  /**
   * Supported regulatory compliance details and state for selected assessment
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsGetResponse>
   */
  get(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceAssessmentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param callback The callback
   */
  get(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param regulatoryComplianceStandardName Name of the regulatory compliance standard object
   * @param regulatoryComplianceControlName Name of the regulatory compliance control object
   * @param regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): void;
  get(resourceGroupName: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessment>): Promise<Models.RegulatoryComplianceAssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        regulatoryComplianceStandardName,
        regulatoryComplianceControlName,
        regulatoryComplianceAssessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsGetResponse>;
  }

  /**
   * Details and state of assessments mapped to selected regulatory compliance control
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>, callback?: msRest.ServiceCallback<Models.RegulatoryComplianceAssessmentList>): Promise<Models.RegulatoryComplianceAssessmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.RegulatoryComplianceAssessmentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments/{regulatoryComplianceAssessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.regulatoryComplianceStandardName,
    Parameters.regulatoryComplianceControlName,
    Parameters.regulatoryComplianceAssessmentName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegulatoryComplianceAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
