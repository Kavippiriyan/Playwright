import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch:["tests/login.test.ts","tests/fb.test.ts"]
  // testMatch:["tests/fb.test.ts"],
  // testMatch:["tests/flipkart.test.ts"],
  // testMatch: ["tests/records.test.ts"],
  // testMatch: ["tests/Assertion.test.ts"],
  testMatch:["tests/checkbox.test.ts"],
  use:
  {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  // retries: 2,
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "Json_Report/jsonReport.json"
  }], ["html", { open: "always" }]]
};
export default config;