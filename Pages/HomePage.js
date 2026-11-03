class HomePage {

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    async openProduct(nombre) {

        await this.page
            .getByRole('link', {
                name: nombre
            })
            .click();

    }
}

module.exports = {
    HomePage
};