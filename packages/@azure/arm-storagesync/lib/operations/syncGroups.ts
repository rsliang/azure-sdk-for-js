/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/syncGroupsMappers";
import * as Parameters from "../models/parameters";
import { StorageSyncManagementClientContext } from "../storageSyncManagementClientContext";

/** Class representing a SyncGroups. */
export class SyncGroups {
  private readonly client: StorageSyncManagementClientContext;

  /**
   * Create a SyncGroups.
   * @param {StorageSyncManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageSyncManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a SyncGroup List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncGroupsListByStorageSyncServiceResponse>
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncGroupsListByStorageSyncServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param callback The callback
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, callback: msRest.ServiceCallback<Models.SyncGroupArray>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncGroupArray>): void;
  listByStorageSyncService(resourceGroupName: string, storageSyncServiceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncGroupArray>): Promise<Models.SyncGroupsListByStorageSyncServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        options
      },
      listByStorageSyncServiceOperationSpec,
      callback) as Promise<Models.SyncGroupsListByStorageSyncServiceResponse>;
  }

  /**
   * Create a new SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param parameters Sync Group Body
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncGroupsCreateResponse>
   */
  create(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, parameters: Models.SyncGroupCreateParameters, options?: msRest.RequestOptionsBase): Promise<Models.SyncGroupsCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param parameters Sync Group Body
   * @param callback The callback
   */
  create(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, parameters: Models.SyncGroupCreateParameters, callback: msRest.ServiceCallback<Models.SyncGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param parameters Sync Group Body
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, parameters: Models.SyncGroupCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncGroup>): void;
  create(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, parameters: Models.SyncGroupCreateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncGroup>): Promise<Models.SyncGroupsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SyncGroupsCreateResponse>;
  }

  /**
   * Get a given SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncGroupsGetResponse>
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, callback: msRest.ServiceCallback<Models.SyncGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncGroup>): void;
  get(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SyncGroup>): Promise<Models.SyncGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SyncGroupsGetResponse>;
  }

  /**
   * Delete a given SyncGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncGroupsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncGroupsDeleteResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param syncGroupName Name of Sync Group resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, storageSyncServiceName: string, syncGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.SyncGroupsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        syncGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.SyncGroupsDeleteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByStorageSyncServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroupArray,
      headersMapper: Mappers.SyncGroupsListByStorageSyncServiceHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SyncGroupCreateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup,
      headersMapper: Mappers.SyncGroupsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncGroup,
      headersMapper: Mappers.SyncGroupsGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/syncGroups/{syncGroupName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.syncGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.SyncGroupsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.SyncGroupsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};