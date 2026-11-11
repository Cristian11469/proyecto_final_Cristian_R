require("dotenv").config();

const { test, expect } = require("./fixtures");
const invalidLogins = require("../test-data/data-login.json");

test.describe("Pruebas de Login", () => {
  test("Login exitoso", async ({ loginPage, credentials }) => {
    await loginPage.login(credentials.usuario, credentials.password);

    await loginPage.validarLoginExitoso();
  });

  for (const login of invalidLogins) {
    test(login.name, async ({ loginPage, credentials }) => {
      const usuario =
        login.username !== undefined ? login.username : credentials.usuario;

      const password =
        login.password !== undefined ? login.password : credentials.password;

      await loginPage.login(usuario, password);

      if (login.error === "Your username is invalid!") {
        await loginPage.validarUsuarioInvalido();
      } else {
        await loginPage.validarPasswordInvalido();
      }
    });
  }

  test("cerrar sesión", async ({ loggedInPage, loginPage }) => {
    await loggedInPage.getByRole("link", { name: "Log out" }).click();

    await expect(loginPage.page).toHaveURL(/practice-test-login/);

    await expect(loginPage.submitButton).toBeVisible();
  });
});
