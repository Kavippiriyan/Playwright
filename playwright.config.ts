import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch:["tests/login.test.ts","tests/fb.test.ts"]
  // testMatch:["tests/fb.test.ts"],
  // testMatch:["tests/flipkart.test.ts"],
  testMatch: ["tests/records.test.ts"],
  use:
  {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  retries: 2,
  reporter: [["dot"], ["json", {
    outputFile: "Json_Report/jsonReport.json"
  }], ["html", { open: "never" }]]
};
export default config;