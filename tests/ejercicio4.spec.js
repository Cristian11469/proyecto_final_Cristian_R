const { test, expect } = require("@playwright/test");

test("1. Lectura única", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  const productos = page.locator('a[href*="/product/"]');

  const cantidad = await productos.count();

  console.log("Lectura única:", cantidad);
});

test("2. Espera fija", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  // Esperar 3 segundos
  await page.waitForTimeout(3000);

  const productos = page.locator('a[href*="/product/"]');

  const cantidad = await productos.count();

  console.log("Después de 3 segundos:", cantidad);
});

test("3. Espera explícita", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  const productos = page.locator('a[href*="/product/"]');

  // Esperar hasta que aparezca el primer producto
  await expect(productos.first()).toBeVisible();

  console.log("El primer producto ya está visible");
});
