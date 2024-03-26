import type { PlaywrightTestConfig } from "@playwright/test";

const config:PlaywrightTestConfig = {
  // testMatch:["tests/login.test.ts","tests/fb.test.ts"]
  // testMatch:["tests/fb.test.ts"]
  testMatch:["tests/flipkart.test.ts"]
};
export default config;