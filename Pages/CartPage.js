class CartPage {

    constructor(page) {
        this.page = page;
    }

    rowFor(nombre) {

        return this.page
            .getByRole('row')
            .filter({
                hasText: nombre
            });

    }

    quantityOf(nombre) {

        return this.rowFor(nombre)
            .getByRole('spinbutton');

    }

}

module.exports = {
    CartPage
};