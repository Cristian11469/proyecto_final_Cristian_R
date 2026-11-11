require("dotenv").config();

const { test: base, expect } = require("@playwright/test");

const { LoginPage } = require("../Pages/loginpage");
const { HomePage } = require("../Pages/HomePage");
const { ProductPage } = require("../Pages/ProductPage");
const { CartPage } = require("../Pages/CartPage");

const requeridas = ["BASE_URL", "SHOP_URL", "LOGIN_USER", "LOGIN_PASSWORD"];
const faltan = requeridas.filter((v) => !process.env[v]);
if (faltan.length > 0) {
  throw new Error(
    `Faltan variables en .env: ${faltan.join(", ")}. Copia .env.example a .env y complétalas.`,
  );
}

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navegar(process.env.BASE_URL);
    await use(loginPage);
  },

  credentials: async ({}, use) => {
    await use({
      usuario: process.env.LOGIN_USER,
      password: process.env.LOGIN_PASSWORD,
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
