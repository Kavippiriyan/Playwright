import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch:["tests/login.test.ts","tests/fb.test.ts"]
  // testMatch:["tests/fb.test.ts"],
  // testMatch:["tests/flipkart.test.ts"],
  // testMatch: ["tests/records.test.ts"],
  // testMatch: ["tests/Assertion.test.ts"],
  // testMatch:["tests/checkbox.test.ts"],
  // testMatch: ["tests/alert.test.ts"],
  // testMatch: ["tests/dropdown.test.ts"],
  // testMatch: ["tests/frames.test.ts"],
  // testMatch: ["tests/windowhandling.test.ts"],
  // testMatch: ["tests/calender.test.ts"],
  //   testMatch: ["tests/upload_download.test.ts"],
  //   use:
  //   {
  //     headless: false,
  //     screenshot: "on",
  //     video: "on"
  //   },
  //   // retries: 2,
  //   retries: 0,
  //   reporter: [["dot"], ["json", {
  //     outputFile: "Json_Report/jsonReport.json"
  //   }], ["html", { open: "never" }]]
  // };
  // export default config;


  // for page object model

  // testMatch: ["pomtest/Shopnow.test.ts"],
  // testMatch: ["Fixture/fixture.test.ts"],
  testMatch: ["pomtest/shopnowusingJSON.test.ts"],
  use:
  {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video: "on",
    launchOptions: {

    }
  },
  // retries: 2,
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "Json_Report/jsonReport.json"
  }], ["html", { open: "never" }]]
};
export default config;