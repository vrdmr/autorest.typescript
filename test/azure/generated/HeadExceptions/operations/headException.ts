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
import * as Mappers from "../models/mappers";
import { AutoRestHeadExceptionTestService } from "../autoRestHeadExceptionTestService";

const WebResource = msRest.WebResource;

/** Class representing a HeadException. */
export class HeadException {
  private readonly client: AutoRestHeadExceptionTestService;
  /**
   * Create a HeadException.
   * @param {AutoRestHeadExceptionTestService} client Reference to the service client.
   */
  constructor(client: AutoRestHeadExceptionTestService) {
    this.client = client;
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async head200WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/success/200");

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: new msRest.HttpHeaders(options && options.customHeaders)
        },
        {
          httpMethod: "HEAD",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.CloudError;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async head204WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/success/204");

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: new msRest.HttpHeaders(options && options.customHeaders)
        },
        {
          httpMethod: "HEAD",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
        });
      let statusCode = operationRes.status;
      if (statusCode !== 204) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.CloudError;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async head404WithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/http/success/404");

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: new msRest.HttpHeaders(options && options.customHeaders)
        },
        {
          httpMethod: "HEAD",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
        });
      let statusCode = operationRes.status;
      if (statusCode !== 204) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
            if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
            if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.CloudError;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Return 200 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head200(): Promise<void>;
  head200(options: msRest.RequestOptionsBase): Promise<void>;
  head200(callback: msRest.ServiceCallback<void>): void;
  head200(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head200(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.head200WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head200WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 204 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head204(): Promise<void>;
  head204(options: msRest.RequestOptionsBase): Promise<void>;
  head204(callback: msRest.ServiceCallback<void>): void;
  head204(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head204(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.head204WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head204WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Return 404 status code if successful
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  head404(): Promise<void>;
  head404(options: msRest.RequestOptionsBase): Promise<void>;
  head404(callback: msRest.ServiceCallback<void>): void;
  head404(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head404(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.head404WithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.head404WithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
