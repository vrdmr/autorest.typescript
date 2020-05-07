/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  VpnServerConfigurationsGetResponse,
  VpnServerConfiguration,
  VpnServerConfigurationsCreateOrUpdateResponse,
  TagsObject,
  VpnServerConfigurationsUpdateTagsResponse,
  VpnServerConfigurationsListByResourceGroupResponse,
  VpnServerConfigurationsListResponse,
  VpnServerConfigurationsListByResourceGroupNextResponse,
  VpnServerConfigurationsListNextResponse
} from "../models";

/**
 * Class representing a VpnServerConfigurations.
 */
export class VpnServerConfigurations {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnServerConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the details of a VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vpnServerConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnServerConfigurationName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<VpnServerConfigurationsGetResponse>;
  }

  /**
   * Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing
   * VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationParameters Parameters supplied to create or update
   *                                         VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being created or updated.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    vpnServerConfigurationParameters: VpnServerConfiguration,
    vpnServerConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VpnServerConfigurationsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      vpnServerConfigurationParameters,
      vpnServerConfigurationName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        VpnServerConfigurationsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Updates VpnServerConfiguration tags.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationParameters Parameters supplied to update VpnServerConfiguration tags.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being updated.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    vpnServerConfigurationParameters: TagsObject,
    vpnServerConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnServerConfigurationParameters,
        vpnServerConfigurationName,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<VpnServerConfigurationsUpdateTagsResponse>;
  }

  /**
   * Deletes a VpnServerConfiguration.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param vpnServerConfigurationName The name of the VpnServerConfiguration being deleted.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    vpnServerConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      vpnServerConfigurationName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Lists all the vpnServerConfigurations in a resource group.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<VpnServerConfigurationsListByResourceGroupResponse>;
  }

  /**
   * Lists all the VpnServerConfigurations in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<VpnServerConfigurationsListResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param resourceGroupName The resource group name of the VpnServerConfiguration.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    nextLink: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, resourceGroupName, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<VpnServerConfigurationsListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnServerConfigurationsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<VpnServerConfigurationsListNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName8,
    Parameters.vpnServerConfigurationName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    201: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    202: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    204: {
      bodyMapper: Mappers.VpnServerConfiguration
    }
  },
  requestBody: Parameters.vpnServerConfigurationParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName8,
    Parameters.vpnServerConfigurationName1
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VpnServerConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.vpnServerConfigurationParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName8,
    Parameters.vpnServerConfigurationName2
  ],
  headerParameters: [Parameters.contentType],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations/{vpnServerConfigurationName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName8,
    Parameters.vpnServerConfigurationName3
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnServerConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName8
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnServerConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink3,
    Parameters.resourceGroupName8
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnServerConfigurationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};