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


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing Slide.
 * A slide in a slideshow
 *
 */
export interface Slide {
  /**
   * @member {string} [type]
   */
  type?: string;
  /**
   * @member {string} [title]
   */
  title?: string;
  /**
   * @member {string[]} [items]
   */
  items?: string[];
}

/**
 * @interface
 * An interface representing Slideshow.
 * Data about a slideshow
 *
 */
export interface Slideshow {
  /**
   * @member {string} [title]
   */
  title?: string;
  /**
   * @member {string} [date]
   */
  date?: string;
  /**
   * @member {string} [author]
   */
  author?: string;
  /**
   * @member {Slide[]} [slides]
   */
  slides?: Slide[];
}

/**
 * @interface
 * An interface representing AppleBarrel.
 * A barrel of apples.
 *
 */
export interface AppleBarrel {
  /**
   * @member {string[]} [goodApples]
   */
  goodApples?: string[];
  /**
   * @member {string[]} [badApples]
   */
  badApples?: string[];
}

/**
 * @interface
 * An interface representing Banana.
 * A banana.
 *
 */
export interface Banana {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [flavor]
   */
  flavor?: string;
  /**
   * @member {Date} [expiration] The time at which you should reconsider eating
   * this banana
   */
  expiration?: Date;
}

/**
 * @interface
 * An interface representing ContainerProperties.
 * Properties of a container
 *
 */
export interface ContainerProperties {
  /**
   * @member {Date} lastModified
   */
  lastModified: Date;
  /**
   * @member {string} etag
   */
  etag: string;
  /**
   * @member {LeaseStatusType} [leaseStatus] Possible values include: 'locked',
   * 'unlocked'
   */
  leaseStatus?: LeaseStatusType;
  /**
   * @member {LeaseStateType} [leaseState] Possible values include:
   * 'available', 'leased', 'expired', 'breaking', 'broken'
   */
  leaseState?: LeaseStateType;
  /**
   * @member {LeaseDurationType} [leaseDuration] Possible values include:
   * 'infinite', 'fixed'
   */
  leaseDuration?: LeaseDurationType;
  /**
   * @member {PublicAccessType} [publicAccess] Possible values include:
   * 'container', 'blob'
   */
  publicAccess?: PublicAccessType;
}

/**
 * @interface
 * An interface representing Container.
 * An Azure Storage container
 *
 */
export interface Container {
  /**
   * @member {string} name
   */
  name: string;
  /**
   * @member {ContainerProperties} properties
   */
  properties: ContainerProperties;
  /**
   * @member {{ [propertyName: string]: string }} [metadata]
   */
  metadata?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ListContainersResponse.
 * An enumeration of containers
 *
 */
export interface ListContainersResponse {
  /**
   * @member {string} serviceEndpoint
   */
  serviceEndpoint: string;
  /**
   * @member {string} prefix
   */
  prefix: string;
  /**
   * @member {string} [marker]
   */
  marker?: string;
  /**
   * @member {number} maxResults
   */
  maxResults: number;
  /**
   * @member {Container[]} [containers]
   */
  containers?: Container[];
  /**
   * @member {string} nextMarker
   */
  nextMarker: string;
}

/**
 * @interface
 * An interface representing CorsRule.
 * CORS is an HTTP feature that enables a web application running under one
 * domain to access resources in another domain. Web browsers implement a
 * security restriction known as same-origin policy that prevents a web page
 * from calling APIs in a different domain; CORS provides a secure way to allow
 * one domain (the origin domain) to call APIs in another domain
 *
 */
export interface CorsRule {
  /**
   * @member {string} allowedOrigins The origin domains that are permitted to
   * make a request against the storage service via CORS. The origin domain is
   * the domain from which the request originates. Note that the origin must be
   * an exact case-sensitive match with the origin that the user age sends to
   * the service. You can also use the wildcard character '*' to allow all
   * origin domains to make requests via CORS.
   */
  allowedOrigins: string;
  /**
   * @member {string} allowedMethods The methods (HTTP request verbs) that the
   * origin domain may use for a CORS request. (comma separated)
   */
  allowedMethods: string;
  /**
   * @member {string} allowedHeaders the request headers that the origin domain
   * may specify on the CORS request.
   */
  allowedHeaders: string;
  /**
   * @member {string} exposedHeaders The response headers that may be sent in
   * the response to the CORS request and exposed by the browser to the request
   * issuer
   */
  exposedHeaders: string;
  /**
   * @member {number} maxAgeInSeconds The maximum amount time that a browser
   * should cache the preflight OPTIONS request.
   */
  maxAgeInSeconds: number;
}

/**
 * @interface
 * An interface representing BlobProperties.
 * Properties of a blob
 *
 */
export interface BlobProperties {
  /**
   * @member {Date} lastModified
   */
  lastModified: Date;
  /**
   * @member {string} etag
   */
  etag: string;
  /**
   * @member {number} [contentLength] Size in bytes
   */
  contentLength?: number;
  /**
   * @member {string} [contentType]
   */
  contentType?: string;
  /**
   * @member {string} [contentEncoding]
   */
  contentEncoding?: string;
  /**
   * @member {string} [contentLanguage]
   */
  contentLanguage?: string;
  /**
   * @member {string} [contentMD5]
   */
  contentMD5?: string;
  /**
   * @member {string} [contentDisposition]
   */
  contentDisposition?: string;
  /**
   * @member {string} [cacheControl]
   */
  cacheControl?: string;
  /**
   * @member {number} [blobSequenceNumber]
   */
  blobSequenceNumber?: number;
  /**
   * @member {BlobType} [blobType] Possible values include: 'BlockBlob',
   * 'PageBlob', 'AppendBlob'
   */
  blobType?: BlobType;
  /**
   * @member {LeaseStatusType} [leaseStatus] Possible values include: 'locked',
   * 'unlocked'
   */
  leaseStatus?: LeaseStatusType;
  /**
   * @member {LeaseStateType} [leaseState] Possible values include:
   * 'available', 'leased', 'expired', 'breaking', 'broken'
   */
  leaseState?: LeaseStateType;
  /**
   * @member {LeaseDurationType} [leaseDuration] Possible values include:
   * 'infinite', 'fixed'
   */
  leaseDuration?: LeaseDurationType;
  /**
   * @member {string} [copyId]
   */
  copyId?: string;
  /**
   * @member {CopyStatusType} [copyStatus] Possible values include: 'pending',
   * 'success', 'aborted', 'failed'
   */
  copyStatus?: CopyStatusType;
  /**
   * @member {string} [copySource]
   */
  copySource?: string;
  /**
   * @member {string} [copyProgress]
   */
  copyProgress?: string;
  /**
   * @member {Date} [copyCompletionTime]
   */
  copyCompletionTime?: Date;
  /**
   * @member {string} [copyStatusDescription]
   */
  copyStatusDescription?: string;
  /**
   * @member {boolean} [serverEncrypted]
   */
  serverEncrypted?: boolean;
  /**
   * @member {boolean} [incrementalCopy]
   */
  incrementalCopy?: boolean;
  /**
   * @member {string} [destinationSnapshot]
   */
  destinationSnapshot?: string;
  /**
   * @member {Date} [deletedTime]
   */
  deletedTime?: Date;
  /**
   * @member {number} [remainingRetentionDays]
   */
  remainingRetentionDays?: number;
  /**
   * @member {AccessTier} [accessTier] Possible values include: 'P4', 'P6',
   * 'P10', 'P20', 'P30', 'P40', 'P50', 'Hot', 'Cool', 'Archive'
   */
  accessTier?: AccessTier;
  /**
   * @member {boolean} [accessTierInferred]
   */
  accessTierInferred?: boolean;
  /**
   * @member {ArchiveStatus} [archiveStatus] Possible values include:
   * 'rehydrate-pending-to-hot', 'rehydrate-pending-to-cool'
   */
  archiveStatus?: ArchiveStatus;
}

/**
 * @interface
 * An interface representing Blob.
 * An Azure Storage blob
 *
 */
export interface Blob {
  /**
   * @member {string} name
   */
  name: string;
  /**
   * @member {boolean} deleted
   */
  deleted: boolean;
  /**
   * @member {string} snapshot
   */
  snapshot: string;
  /**
   * @member {BlobProperties} properties
   */
  properties: BlobProperties;
  /**
   * @member {{ [propertyName: string]: string }} [metadata]
   */
  metadata?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing RetentionPolicy.
 * the retention policy
 *
 */
export interface RetentionPolicy {
  /**
   * @member {boolean} enabled Indicates whether a retention policy is enabled
   * for the storage service
   */
  enabled: boolean;
  /**
   * @member {number} [days] Indicates the number of days that metrics or
   * logging or soft-deleted data should be retained. All data older than this
   * value will be deleted
   */
  days?: number;
}

/**
 * @interface
 * An interface representing Logging.
 * Azure Analytics Logging settings.
 *
 */
export interface Logging {
  /**
   * @member {string} version The version of Storage Analytics to configure.
   */
  version: string;
  /**
   * @member {boolean} deleteProperty Indicates whether all delete requests
   * should be logged.
   */
  deleteProperty: boolean;
  /**
   * @member {boolean} read Indicates whether all read requests should be
   * logged.
   */
  read: boolean;
  /**
   * @member {boolean} write Indicates whether all write requests should be
   * logged.
   */
  write: boolean;
  /**
   * @member {RetentionPolicy} retentionPolicy
   */
  retentionPolicy: RetentionPolicy;
}

/**
 * @interface
 * An interface representing Metrics.
 */
export interface Metrics {
  /**
   * @member {string} [version] The version of Storage Analytics to configure.
   */
  version?: string;
  /**
   * @member {boolean} enabled Indicates whether metrics are enabled for the
   * Blob service.
   */
  enabled: boolean;
  /**
   * @member {boolean} [includeAPIs] Indicates whether metrics should generate
   * summary statistics for called API operations.
   */
  includeAPIs?: boolean;
  /**
   * @member {RetentionPolicy} [retentionPolicy]
   */
  retentionPolicy?: RetentionPolicy;
}

/**
 * @interface
 * An interface representing BlobPrefix.
 */
export interface BlobPrefix {
  /**
   * @member {string} name
   */
  name: string;
}

/**
 * @interface
 * An interface representing Blobs.
 */
export interface Blobs {
  /**
   * @member {BlobPrefix[]} [blobPrefix]
   */
  blobPrefix?: BlobPrefix[];
  /**
   * @member {Blob[]} [blob]
   */
  blob?: Blob[];
}

/**
 * @interface
 * An interface representing ListBlobsResponse.
 * An enumeration of blobs
 *
 */
export interface ListBlobsResponse {
  /**
   * @member {string} serviceEndpoint
   */
  serviceEndpoint: string;
  /**
   * @member {string} containerName
   */
  containerName: string;
  /**
   * @member {string} prefix
   */
  prefix: string;
  /**
   * @member {string} marker
   */
  marker: string;
  /**
   * @member {number} maxResults
   */
  maxResults: number;
  /**
   * @member {string} delimiter
   */
  delimiter: string;
  /**
   * @member {Blobs} blobs
   */
  blobs: Blobs;
  /**
   * @member {string} nextMarker
   */
  nextMarker: string;
}

/**
 * @interface
 * An interface representing AccessPolicy.
 * An Access policy
 *
 */
export interface AccessPolicy {
  /**
   * @member {Date} start the date-time the policy is active
   */
  start: Date;
  /**
   * @member {Date} expiry the date-time the policy expires
   */
  expiry: Date;
  /**
   * @member {string} permission the permissions for the acl policy
   */
  permission: string;
}

/**
 * @interface
 * An interface representing SignedIdentifier.
 * signed identifier
 *
 */
export interface SignedIdentifier {
  /**
   * @member {string} id a unique id
   */
  id: string;
  /**
   * @member {AccessPolicy} accessPolicy The access policy
   */
  accessPolicy: AccessPolicy;
}

/**
 * @interface
 * An interface representing StorageServiceProperties.
 * Storage Service Properties.
 *
 */
export interface StorageServiceProperties {
  /**
   * @member {Logging} [logging] Azure Analytics Logging settings
   */
  logging?: Logging;
  /**
   * @member {Metrics} [hourMetrics] A summary of request statistics grouped by
   * API in hourly aggregates for blobs
   */
  hourMetrics?: Metrics;
  /**
   * @member {Metrics} [minuteMetrics] a summary of request statistics grouped
   * by API in minute aggregates for blobs
   */
  minuteMetrics?: Metrics;
  /**
   * @member {CorsRule[]} [cors] The set of CORS rules.
   */
  cors?: CorsRule[];
  /**
   * @member {string} [defaultServiceVersion] The default version to use for
   * requests to the Blob service if an incoming request's version is not
   * specified. Possible values include version 2008-10-27 and all more recent
   * versions
   */
  defaultServiceVersion?: string;
  /**
   * @member {RetentionPolicy} [deleteRetentionPolicy] The Delete Retention
   * Policy for the service
   */
  deleteRetentionPolicy?: RetentionPolicy;
}

/**
 * @interface
 * An interface representing XmlGetHeadersHeaders.
 * Defines headers for getHeaders operation.
 *
 */
export interface XmlGetHeadersHeaders {
  /**
   * @member {string} [customHeader] A custom response header.
   */
  customHeader?: string;
}

/**
 * Defines values for LeaseStatusType.
 * Possible values include: 'locked', 'unlocked'
 * @readonly
 * @enum {string}
 */
export enum LeaseStatusType {
  Locked = 'locked',
  Unlocked = 'unlocked',
}

/**
 * Defines values for LeaseStateType.
 * Possible values include: 'available', 'leased', 'expired', 'breaking',
 * 'broken'
 * @readonly
 * @enum {string}
 */
export enum LeaseStateType {
  Available = 'available',
  Leased = 'leased',
  Expired = 'expired',
  Breaking = 'breaking',
  Broken = 'broken',
}

/**
 * Defines values for LeaseDurationType.
 * Possible values include: 'infinite', 'fixed'
 * @readonly
 * @enum {string}
 */
export enum LeaseDurationType {
  Infinite = 'infinite',
  Fixed = 'fixed',
}

/**
 * Defines values for PublicAccessType.
 * Possible values include: 'container', 'blob'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PublicAccessType =
 * <PublicAccessType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum PublicAccessType {
  Container = 'container',
  Blob = 'blob',
}

/**
 * Defines values for BlobType.
 * Possible values include: 'BlockBlob', 'PageBlob', 'AppendBlob'
 * @readonly
 * @enum {string}
 */
export enum BlobType {
  BlockBlob = 'BlockBlob',
  PageBlob = 'PageBlob',
  AppendBlob = 'AppendBlob',
}

/**
 * Defines values for CopyStatusType.
 * Possible values include: 'pending', 'success', 'aborted', 'failed'
 * @readonly
 * @enum {string}
 */
export enum CopyStatusType {
  Pending = 'pending',
  Success = 'success',
  Aborted = 'aborted',
  Failed = 'failed',
}

/**
 * Defines values for AccessTier.
 * Possible values include: 'P4', 'P6', 'P10', 'P20', 'P30', 'P40', 'P50',
 * 'Hot', 'Cool', 'Archive'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: AccessTier = <AccessTier>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum AccessTier {
  P4 = 'P4',
  P6 = 'P6',
  P10 = 'P10',
  P20 = 'P20',
  P30 = 'P30',
  P40 = 'P40',
  P50 = 'P50',
  Hot = 'Hot',
  Cool = 'Cool',
  Archive = 'Archive',
}

/**
 * Defines values for ArchiveStatus.
 * Possible values include: 'rehydrate-pending-to-hot',
 * 'rehydrate-pending-to-cool'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ArchiveStatus =
 * <ArchiveStatus>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum ArchiveStatus {
  RehydratePendingToHot = 'rehydrate-pending-to-hot',
  RehydratePendingToCool = 'rehydrate-pending-to-cool',
}

/**
 * Contains response data for the getHeaders operation.
 */
export interface XmlGetHeadersResponse extends msRest.HttpOperationResponse<void, XmlGetHeadersHeaders> {};
