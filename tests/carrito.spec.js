require('dotenv').config();

const {test,expect} = require('./fixtures');
test.use({baseURL: process.env.SHOP_URL
});

const productos = ['Bolt Cutters','Slip Joint Pliers'];
for (const producto of productos) {
test(`Agregar ${producto} al carrito`,
async ({ homePage,productPage,cartPage}) => {

await homePage.openProduct(producto);
await expect(productPage.title ).toHaveText(producto);
await productPage.addToCart();
await expect(productPage.confirmation).toBeVisible();
await productPage.openCart();
await expect(cartPage.rowFor(producto )).toBeVisible();
await expect(cartPage.quantityOf( producto)).toHaveValue('1');
});

}