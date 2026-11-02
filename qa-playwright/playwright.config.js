const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  use: {
    baseURL: "https://practicesoftwaretesting.com",
    headless: false,
    testIdAttribute: "data-testid",
  },
});
