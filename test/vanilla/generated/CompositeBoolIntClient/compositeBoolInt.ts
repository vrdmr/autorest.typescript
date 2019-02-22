/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { CompositeBoolIntContext } from "./compositeBoolIntContext";

class CompositeBoolInt extends CompositeBoolIntContext {
  // Operation groups
  bool: operations.Bool;
  intModel: operations.IntModel;

  /**
   * Initializes a new instance of the CompositeBoolInt class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.CompositeBoolIntOptions) {
    super(options);
    this.bool = new operations.Bool(this);
    this.intModel = new operations.IntModel(this);
  }
}

// Operation Specifications

export {
  CompositeBoolInt,
  CompositeBoolIntContext,
  Models as CompositeBoolIntModels,
  Mappers as CompositeBoolIntMappers
};
export * from "./operations";
