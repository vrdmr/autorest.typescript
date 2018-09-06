import * as assert from "assert";

import * as vDefault from "./generated";
import * as v2017_10 from "./generated/2017-10-01";
import * as v2018_02 from "./generated/2018-02-01";

describe("multi-api client", function () {
  it("should import a reasonable default", function () {
    assert.strictEqual(vDefault.AutoRestParameterizedCustomHostTestClient, v2018_02.AutoRestParameterizedCustomHostTestClient);
  });

  it("should have different API versions", function () {
    assert.notEqual(v2017_10.AutoRestParameterizedHostTestClient, v2018_02.AutoRestParameterizedCustomHostTestClient);
  });
});
