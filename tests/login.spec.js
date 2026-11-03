require("dotenv").config();

const { test } = require("./fixtures");

test.describe("Pruebas de Login", () => {
  test("Login exitoso", async ({ loginPage, credentials }) => {
    await loginPage.login(credentials.usuario, credentials.password);

    await loginPage.validarLoginExitoso();
  });

  test("Usuario inválido", async ({ loginPage, credentials }) => {
    await loginPage.login("incorrectUser", credentials.password);

    await loginPage.validarUsuarioInvalido();
  });

  test("Contraseña inválida", async ({ loginPage, credentials }) => {
    await loginPage.login(credentials.usuario, "incorrectPassword");

    await loginPage.validarPasswordInvalido();
  });
});
