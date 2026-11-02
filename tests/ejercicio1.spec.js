const { test, expect } = require("@playwright/test");

test("Ejercicio 1 - Configuración y mapa", async ({ page }) => {
  // Abrir Toolshop
  await page.goto("https://practicesoftwaretesting.com/");

  // 1. Comprobar título
  await expect(page).toHaveTitle(/Practice Software Testing/i);

  // 2. Comprobar que el cuerpo de la página es visible
  await expect(page.locator("body")).toBeVisible();

  // 3. Comprobar que existe el buscador
  await expect(page.getByPlaceholder("Search")).toBeVisible();

  // 4. Comprobar que existe el botón de búsqueda
  await expect(page.getByRole("button", { name: /search/i })).toBeVisible();

  // 5. Comprobar que existe al menos un enlace de producto
  const productos = page.locator('a[href*="/product/"]');

  await expect(productos.first()).toBeVisible();

  console.log("Ejercicio 1: cinco comprobaciones realizadas correctamente");
});
