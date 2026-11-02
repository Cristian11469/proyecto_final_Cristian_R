const { test, expect } = require("@playwright/test");

test("Ejercicio 2 - Modo estricto", async ({ page }) => {
  // Abrir Toolshop
  await page.goto("https://practicesoftwaretesting.com/");

  // Identificar los productos
  const productos = page.locator(".card");

  // Comprobar que existen varios productos
  await expect(productos.first()).toBeVisible();

  console.log("Cantidad de productos:", await productos.count());

  // SOLUCION 1: seleccionar el primer producto
  await productos.first().click();

  // Regresar a la tienda
  await page.goto("https://practicesoftwaretesting.com/");

  // SOLUCION 2: seleccionar el segundo producto
  await productos.nth(1).click();
});

test("Provocar error de modo estricto", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  // Buscar varios productos
  const productos = page.locator(".card");

  // Intentar hacer clic en todos mediante un único locator
  await productos.click();
});
