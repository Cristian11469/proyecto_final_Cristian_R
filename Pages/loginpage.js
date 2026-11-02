const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        this.errorMessage = page.locator('#error');
    }

    async navegar(url) {
        await this.page.goto(url);
    }

    async login(usuario, clave) {
        await this.username.fill(usuario);
        await this.password.fill(clave);
        await this.submitButton.click();
    }

    async validarLoginExitoso() {
        await expect(
            this.page.getByText(
                'Congratulations student. You successfully logged in!'
            )
        ).toBeVisible();
    }

    async validarUsuarioInvalido() {
        await expect(this.errorMessage)
            .toHaveText('Your username is invalid!');
    }

    async validarPasswordInvalido() {
        await expect(this.errorMessage)
            .toHaveText('Your password is invalid!');
    }
}

module.exports = { LoginPage };