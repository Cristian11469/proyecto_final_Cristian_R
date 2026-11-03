require("dotenv").config();

const { test: base, expect } = require("@playwright/test");

const { LoginPage } = require("../Pages/loginpage");
const { HomePage } = require("../Pages/HomePage");
const { ProductPage } = require("../Pages/ProductPage");
const { CartPage } = require("../Pages/CartPage");

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navegar(process.env.BASE_URL);

    await use(loginPage);
  },

  credentials: async ({}, use) => {
    await use({
      usuario: process.env.USERNAME,
      password: process.env.PASSWORD,
    });
  },

  loggedInPage: async ({ page, loginPage, credentials }, use) => {
    await loginPage.login(credentials.usuario, credentials.password);

    await use(page);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await use(homePage);
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

module.exports = {
  test,
  expect,
};
