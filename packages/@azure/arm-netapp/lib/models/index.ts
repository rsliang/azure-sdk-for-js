/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft NetApp.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed
   * etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Type of operation: get, read, delete, etc.
   */
  operation?: string;
  /**
   * @member {string} [description] Operation description.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Dimension.
 * Dimension of blobs, possibly be blob type or access tier.
 *
 */
export interface Dimension {
  /**
   * @member {string} [name] Display name of dimension.
   */
  name?: string;
  /**
   * @member {string} [displayName] Display name of dimension.
   */
  displayName?: string;
}

/**
 * @interface
 * An interface representing MetricSpecification.
 * Metric specification of operation.
 *
 */
export interface MetricSpecification {
  /**
   * @member {string} [name] Name of metric specification.
   */
  name?: string;
  /**
   * @member {string} [displayName] Display name of metric specification.
   */
  displayName?: string;
  /**
   * @member {string} [displayDescription] Display description of metric
   * specification.
   */
  displayDescription?: string;
  /**
   * @member {string} [unit] Unit could be Bytes or Count.
   */
  unit?: string;
  /**
   * @member {Dimension[]} [dimensions] Dimensions of blobs, including blob
   * type and access tier.
   */
  dimensions?: Dimension[];
  /**
   * @member {string} [aggregationType] Aggregation type could be Average.
   */
  aggregationType?: string;
  /**
   * @member {boolean} [fillGapWithZero] The property to decide fill gap with
   * zero or not.
   */
  fillGapWithZero?: boolean;
  /**
   * @member {string} [category] The category this metric specification belong
   * to, could be Capacity.
   */
  category?: string;
  /**
   * @member {string} [resourceIdDimensionNameOverride] Account Resource Id.
   */
  resourceIdDimensionNameOverride?: string;
}

/**
 * @interface
 * An interface representing ServiceSpecification.
 * One property of operation, include metric specifications.
 *
 */
export interface ServiceSpecification {
  /**
   * @member {MetricSpecification[]} [metricSpecifications] Metric
   * specifications of operation.
   */
  metricSpecifications?: MetricSpecification[];
}

/**
 * @interface
 * An interface representing Operation.
 * Microsoft.NetApp REST API operation definition.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Display metadata associated with the
   * operation.
   */
  display?: OperationDisplay;
  /**
   * @member {string} [origin] The origin of operations.
   */
  origin?: string;
  /**
   * @member {ServiceSpecification} [serviceSpecification] One property of
   * operation, include metric specifications.
   */
  serviceSpecification?: ServiceSpecification;
}

/**
 * @interface
 * An interface representing ActiveDirectory.
 * Active Directory
 *
 */
export interface ActiveDirectory {
  /**
   * @member {string} [activeDirectoryId] Id of the Active Directory
   */
  activeDirectoryId?: string;
  /**
   * @member {string} [username] Username of Active Directory domain
   * administrator
   */
  username?: string;
  /**
   * @member {string} [password] Plain text password of Active Directory domain
   * administrator
   */
  password?: string;
  /**
   * @member {string} [domain] Name of the Active Directory domain
   */
  domain?: string;
  /**
   * @member {string} [dNS] Comma separated list of DNS server IP addresses for
   * the Active Directory domain
   */
  dNS?: string;
  /**
   * @member {string} [status] Status of the Active Directory
   */
  status?: string;
  /**
   * @member {string} [sMBServerName] NetBIOS name of the SMB server. This name
   * will be registered as a computer account in the AD and used to mount
   * volumes
   */
  sMBServerName?: string;
  /**
   * @member {string} [organizationalUnit] The Organizational Unit (OU) within
   * the Windows Active Directory
   */
  organizationalUnit?: string;
}

/**
 * @interface
 * An interface representing NetAppAccount.
 * NetApp account resource
 *
 * @extends BaseResource
 */
export interface NetAppAccount extends BaseResource {
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {ActiveDirectory[]} [activeDirectories] Active Directories
   */
  activeDirectories?: ActiveDirectory[];
}

/**
 * @interface
 * An interface representing NetAppAccountPatch.
 * NetApp account patch resource
 *
 * @extends BaseResource
 */
export interface NetAppAccountPatch extends BaseResource {
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {ActiveDirectory[]} [activeDirectories] Active Directories
   */
  activeDirectories?: ActiveDirectory[];
}

/**
 * @interface
 * An interface representing CapacityPool.
 * Capacity pool resource
 *
 * @extends BaseResource
 */
export interface CapacityPool extends BaseResource {
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [poolId] poolId. UUID v4 used to identify the Pool
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly poolId?: string;
  /**
   * @member {number} [size] size. Provisioned size of the pool (in bytes).
   * Allowed values are in 4TiB chunks (value must be multiply of
   * 4398046511104). Default value: 4398046511104 .
   */
  size?: number;
  /**
   * @member {ServiceLevel} [serviceLevel] serviceLevel. The service level of
   * the file system. Possible values include: 'Standard', 'Premium', 'Ultra'.
   * Default value: 'Premium' .
   */
  serviceLevel?: ServiceLevel;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
}

/**
 * @interface
 * An interface representing CapacityPoolPatch.
 * Capacity pool patch resource
 *
 * @extends BaseResource
 */
export interface CapacityPoolPatch extends BaseResource {
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {number} [size] size. Provisioned size of the pool (in bytes).
   * Allowed values are in 4TiB chunks (value must be multiply of
   * 4398046511104). Default value: 4398046511104 .
   */
  size?: number;
  /**
   * @member {ServiceLevel} [serviceLevel] serviceLevel. The service level of
   * the file system. Possible values include: 'Standard', 'Premium', 'Ultra'.
   * Default value: 'Premium' .
   */
  serviceLevel?: ServiceLevel;
}

/**
 * @interface
 * An interface representing ExportPolicyRule.
 * Volume Export Policy Rule
 *
 */
export interface ExportPolicyRule {
  /**
   * @member {number} [ruleIndex] Order index
   */
  ruleIndex?: number;
  /**
   * @member {boolean} [unixReadOnly] Read only access
   */
  unixReadOnly?: boolean;
  /**
   * @member {boolean} [unixReadWrite] Read and write access
   */
  unixReadWrite?: boolean;
  /**
   * @member {boolean} [cifs] Allows CIFS protocol
   */
  cifs?: boolean;
  /**
   * @member {boolean} [nfsv3] Allows NFSv3 protocol
   */
  nfsv3?: boolean;
  /**
   * @member {boolean} [nfsv4] Allows NFSv4 protocol
   */
  nfsv4?: boolean;
  /**
   * @member {string} [allowedClients] Client ingress specification as comma
   * separated string with IPv4 CIDRs, IPv4 host addresses and host names
   */
  allowedClients?: string;
}

/**
 * @interface
 * An interface representing VolumePropertiesExportPolicy.
 * Export policy rule
 *
 */
export interface VolumePropertiesExportPolicy {
  /**
   * @member {ExportPolicyRule[]} [rules]
   */
  rules?: ExportPolicyRule[];
}

/**
 * @interface
 * An interface representing Volume.
 * Volume resource
 *
 * @extends BaseResource
 */
export interface Volume extends BaseResource {
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [fileSystemId] FileSystem ID. Unique FileSystem
   * Identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly fileSystemId?: string;
  /**
   * @member {string} creationToken Creation Token or File Path. A unique file
   * path for the volume. Used when creating mount targets
   */
  creationToken: string;
  /**
   * @member {ServiceLevel} serviceLevel serviceLevel. The service level of the
   * file system. Possible values include: 'Standard', 'Premium', 'Ultra'.
   * Default value: 'Premium' .
   */
  serviceLevel: ServiceLevel;
  /**
   * @member {number} [usageThreshold] usageThreshold. Maximum storage quota
   * allowed for a file system in bytes. This is a soft quota used for alerting
   * only. Minimum size is 100 GiB. Upper limit is 100TiB. Default value:
   * 107374182400 .
   */
  usageThreshold?: number;
  /**
   * @member {VolumePropertiesExportPolicy} [exportPolicy] Export policy rule
   */
  exportPolicy?: VolumePropertiesExportPolicy;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
  /**
   * @member {string} [subnetId] The Azure Resource URI for a delegated subnet.
   * Must have the delegation Microsoft.NetApp/volumes
   */
  subnetId?: string;
}

/**
 * @interface
 * An interface representing VolumePatchPropertiesExportPolicy.
 * Export policy rule
 *
 */
export interface VolumePatchPropertiesExportPolicy {
  /**
   * @member {ExportPolicyRule[]} [rules]
   */
  rules?: ExportPolicyRule[];
}

/**
 * @interface
 * An interface representing VolumePatch.
 * Volume patch resource
 *
 * @extends BaseResource
 */
export interface VolumePatch extends BaseResource {
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {ServiceLevel} [serviceLevel] serviceLevel. The service level of
   * the file system. Possible values include: 'Standard', 'Premium', 'Ultra'.
   * Default value: 'Premium' .
   */
  serviceLevel?: ServiceLevel;
  /**
   * @member {number} [usageThreshold] usageThreshold. Maximum storage quota
   * allowed for a file system in bytes. This is a soft quota used for alerting
   * only. Minimum size is 100 GiB. Upper limit is 100TiB. Default value:
   * 107374182400 .
   */
  usageThreshold?: number;
  /**
   * @member {VolumePatchPropertiesExportPolicy} [exportPolicy] Export policy
   * rule
   */
  exportPolicy?: VolumePatchPropertiesExportPolicy;
}

/**
 * @interface
 * An interface representing MountTarget.
 * Mount Target
 *
 */
export interface MountTarget {
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [mountTargetId] mountTargetId. UUID v4 used to identify
   * the MountTarget
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly mountTargetId?: string;
  /**
   * @member {string} fileSystemId fileSystemId. UUID v4 used to identify the
   * MountTarget
   */
  fileSystemId: string;
  /**
   * @member {string} [ipAddress] ipAddress. The mount target's IPv4 address
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly ipAddress?: string;
  /**
   * @member {string} [subnet] subnet. The subnet
   */
  subnet?: string;
  /**
   * @member {string} [startIp] startIp. The start of IPv4 address range to use
   * when creating a new mount target
   */
  startIp?: string;
  /**
   * @member {string} [endIp] endIp. The end of IPv4 address range to use when
   * creating a new mount target
   */
  endIp?: string;
  /**
   * @member {string} [gateway] gateway. The gateway of the IPv4 address range
   * to use when creating a new mount target
   */
  gateway?: string;
  /**
   * @member {string} [netmask] netmask. The netmask of the IPv4 address range
   * to use when creating a new mount target
   */
  netmask?: string;
  /**
   * @member {string} [smbServerFqdn] smbServerFQDN. The SMB server's Fully
   * Qualified Domain Name, FQDN
   */
  smbServerFqdn?: string;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
}

/**
 * @interface
 * An interface representing Snapshot.
 * Snapshot of a Volume
 *
 * @extends BaseResource
 */
export interface Snapshot extends BaseResource {
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
  /**
   * @member {string} [snapshotId] snapshotId. UUID v4 used to identify the
   * Snapshot
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly snapshotId?: string;
  /**
   * @member {string} fileSystemId fileSystemId. UUID v4 used to identify the
   * FileSystem
   */
  fileSystemId: string;
  /**
   * @member {Date} [creationDate] name. The creation date of the snapshot
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly creationDate?: Date;
  /**
   * @member {string} [provisioningState] Azure lifecycle management
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: string;
}

/**
 * @interface
 * An interface representing SnapshotPatch.
 * Snapshot patch
 *
 * @extends BaseResource
 */
export interface SnapshotPatch extends BaseResource {
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
}

/**
 * @interface
 * An interface representing ErrorModel.
 * Error response describing why the operation failed.
 *
 */
export interface ErrorModel {
  /**
   * @member {string} code Error code
   */
  code: string;
  /**
   * @member {string} message Detailed error message
   */
  message: string;
}

/**
 * @interface
 * An interface representing SnapshotsUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SnapshotsUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {any} [tags] Resource tags
   */
  tags?: any;
}

/**
 * @interface
 * An interface representing AzureNetAppFilesManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureNetAppFilesManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Cloud Volume operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * @interface
 * An interface representing the NetAppAccountList.
 * List of NetApp account resources
 *
 * @extends Array<NetAppAccount>
 */
export interface NetAppAccountList extends Array<NetAppAccount> {
}

/**
 * @interface
 * An interface representing the CapacityPoolList.
 * List of capacity pool resources
 *
 * @extends Array<CapacityPool>
 */
export interface CapacityPoolList extends Array<CapacityPool> {
}

/**
 * @interface
 * An interface representing the VolumeList.
 * List of volume resources
 *
 * @extends Array<Volume>
 */
export interface VolumeList extends Array<Volume> {
}

/**
 * @interface
 * An interface representing the MountTargetList.
 * List of Mount Targets
 *
 * @extends Array<MountTarget>
 */
export interface MountTargetList extends Array<MountTarget> {
}

/**
 * @interface
 * An interface representing the SnapshotsList.
 * List of Snapshots
 *
 * @extends Array<Snapshot>
 */
export interface SnapshotsList extends Array<Snapshot> {
}

/**
 * Defines values for ServiceLevel.
 * Possible values include: 'Standard', 'Premium', 'Ultra'
 * @readonly
 * @enum {string}
 */
export type ServiceLevel = 'Standard' | 'Premium' | 'Ultra';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type AccountsListResponse = NetAppAccountList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetAppAccountList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AccountsGetResponse = NetAppAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetAppAccount;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AccountsCreateOrUpdateResponse = NetAppAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetAppAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AccountsUpdateResponse = NetAppAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetAppAccount;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AccountsBeginCreateOrUpdateResponse = NetAppAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetAppAccount;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PoolsListResponse = CapacityPoolList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CapacityPoolList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PoolsGetResponse = CapacityPool & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CapacityPool;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type PoolsCreateOrUpdateResponse = CapacityPool & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CapacityPool;
    };
};

/**
 * Contains response data for the update operation.
 */
export type PoolsUpdateResponse = CapacityPool & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CapacityPool;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type PoolsBeginCreateOrUpdateResponse = CapacityPool & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CapacityPool;
    };
};

/**
 * Contains response data for the list operation.
 */
export type VolumesListResponse = VolumeList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VolumeList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VolumesGetResponse = Volume & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Volume;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VolumesCreateOrUpdateResponse = Volume & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Volume;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VolumesUpdateResponse = Volume & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Volume;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type VolumesBeginCreateOrUpdateResponse = Volume & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Volume;
    };
};

/**
 * Contains response data for the list operation.
 */
export type MountTargetsListResponse = MountTargetList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MountTargetList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SnapshotsListResponse = SnapshotsList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SnapshotsList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SnapshotsGetResponse = Snapshot & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Snapshot;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SnapshotsCreateResponse = Snapshot & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Snapshot;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SnapshotsUpdateResponse = Snapshot & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Snapshot;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type SnapshotsBeginCreateResponse = Snapshot & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Snapshot;
    };
};
