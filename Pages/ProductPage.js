class ProductPage {
  constructor(page) {
    this.page = page;

    this.title = page.getByRole("heading", { level: 1 });

    this.addToCartButton = page.getByRole("button", {
      name: "Add to cart",
    });

    this.confirmation = page.getByRole("alert");

    this.cartLink = page.locator('[data-test="nav-cart"]');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = {
  ProductPage,
};
