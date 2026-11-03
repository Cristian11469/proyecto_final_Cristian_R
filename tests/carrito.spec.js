require('dotenv').config();

const {
    test,
    expect
} = require('./fixtures');

test.use({
    baseURL: process.env.SHOP_URL
});

const PRODUCTO = 'Bolt Cutters';

test(
    'CP-TIENDA-01 Agregar producto al carrito',

    async ({
        homePage,
        productPage,
        cartPage
    }) => {

        await homePage.openProduct(
            PRODUCTO
        );

        await expect(
            productPage.title
        ).toHaveText(
            PRODUCTO
        );

        await productPage.addToCart();

        await expect(
            productPage.confirmation
        ).toBeVisible();

        await productPage.openCart();

        await expect(
            cartPage.rowFor(
                PRODUCTO
            )
        ).toBeVisible();

        await expect(
            cartPage.quantityOf(
                PRODUCTO
            )
        ).toHaveValue('1');

    }
);