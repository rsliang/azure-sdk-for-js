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
import * as Mappers from "../models/lotsByBillingProfileMappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClientContext } from "../consumptionManagementClientContext";

/** Class representing a LotsByBillingProfile. */
export class LotsByBillingProfile {
  private readonly client: ConsumptionManagementClientContext;

  /**
   * Create a LotsByBillingProfile.
   * @param {ConsumptionManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConsumptionManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the lots by billingAccountId and billingProfileId for given start and end date.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.LotsByBillingProfileListResponse>
   */
  list(billingAccountId: string, billingProfileId: string, options?: msRest.RequestOptionsBase): Promise<Models.LotsByBillingProfileListResponse>;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Billing Profile Id.
   * @param callback The callback
   */
  list(billingAccountId: string, billingProfileId: string, callback: msRest.ServiceCallback<Models.Lots>): void;
  /**
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountId: string, billingProfileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Lots>): void;
  list(billingAccountId: string, billingProfileId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Lots>, callback?: msRest.ServiceCallback<Models.Lots>): Promise<Models.LotsByBillingProfileListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        billingProfileId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LotsByBillingProfileListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/lots",
  urlParameters: [
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Lots
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
