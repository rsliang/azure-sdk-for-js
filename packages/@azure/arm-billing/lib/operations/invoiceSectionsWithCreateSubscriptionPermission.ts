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
import * as Mappers from "../models/invoiceSectionsWithCreateSubscriptionPermissionMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a InvoiceSectionsWithCreateSubscriptionPermission. */
export class InvoiceSectionsWithCreateSubscriptionPermission {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a InvoiceSectionsWithCreateSubscriptionPermission.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all invoiceSections with create subscription permission for a user.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoiceSectionsWithCreateSubscriptionPermissionListResponse>
   */
  list(billingAccountName: string, options?: Models.InvoiceSectionsWithCreateSubscriptionPermissionListOptionalParams): Promise<Models.InvoiceSectionsWithCreateSubscriptionPermissionListResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  list(billingAccountName: string, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountName: string, options: Models.InvoiceSectionsWithCreateSubscriptionPermissionListOptionalParams, callback: msRest.ServiceCallback<Models.InvoiceSectionListResult>): void;
  list(billingAccountName: string, options?: Models.InvoiceSectionsWithCreateSubscriptionPermissionListOptionalParams | msRest.ServiceCallback<Models.InvoiceSectionListResult>, callback?: msRest.ServiceCallback<Models.InvoiceSectionListResult>): Promise<Models.InvoiceSectionsWithCreateSubscriptionPermissionListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InvoiceSectionsWithCreateSubscriptionPermissionListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InvoiceSectionListResult,
      headersMapper: Mappers.InvoiceSectionsWithCreateSubscriptionPermissionListHeaders
    },
    202: {
      headersMapper: Mappers.InvoiceSectionsWithCreateSubscriptionPermissionListHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
