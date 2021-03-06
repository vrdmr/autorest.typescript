/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestIntegerTestServiceContext } from "./autoRestIntegerTestServiceContext";

class AutoRestIntegerTestService extends AutoRestIntegerTestServiceContext {
  // Operation groups
  intModel: operations.IntModel;

  /**
   * Initializes a new instance of the AutoRestIntegerTestService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestIntegerTestServiceOptions) {
    super(options);
    this.intModel = new operations.IntModel(this);
  }
}

// Operation Specifications

export {
  AutoRestIntegerTestService,
  AutoRestIntegerTestServiceContext,
  Models as AutoRestIntegerTestServiceModels,
  Mappers as AutoRestIntegerTestServiceMappers
};
export * from "./operations";
