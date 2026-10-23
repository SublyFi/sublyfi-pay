import { describe, expect, it } from "vitest";
import { isSupportedNodeVersion } from "../src/config/node-runtime.js";

describe("Node.js security baseline", () => {
  it.each(["22.23.4", "24.13.0", "24.22.0", "25.9.0", "26.12.0", "24.22.1-rc.1", "invalid"])(
    "rejects unsupported or unpatched runtime %s", (version) => {
      expect(isSupportedNodeVersion(version)).toBe(false);
    }
  );
  it.each(["24.22.1", "24.22.2", "24.23.0", "26.12.1", "26.13.0", "27.0.0"])(
    "accepts patched runtime %s", (version) => {
      expect(isSupportedNodeVersion(version)).toBe(true);
    }
  );
});
