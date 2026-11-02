require('dotenv').config();

const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Pruebas de Login', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

        await loginPage.navegar(
            process.env.BASE_URL
        );
    });

    test('Login exitoso', async () => {

        await loginPage.login(
            process.env.USERNAME,
            process.env.PASSWORD
        );

        await loginPage.validarLoginExitoso();
    });

    test('Usuario inválido', async () => {

        await loginPage.login(
            'incorrectUser',
            process.env.PASSWORD
        );

        await loginPage.validarUsuarioInvalido();
    });

    test('Contraseña inválida', async () => {

        await loginPage.login(
            process.env.USERNAME,
            'incorrectPassword'
        );

        await loginPage.validarPasswordInvalido();
    });

});