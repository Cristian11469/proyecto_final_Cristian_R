const { test, expect } = require("@playwright/test");

test("Ejercicio 3 - Buscar producto inexistente", async ({ page }) => {
  // 1. Abrir Toolshop
  await page.goto("https://practicesoftwaretesting.com/");

  // 2. Buscar el producto inexistente
  const buscador = page.getByPlaceholder("Search");

  await buscador.fill("ProductoXYZ999");

  // 3. Ejecutar búsqueda
  await buscador.press("Enter");

  // 4. Esperar que termine la actualización
  await expect(page.locator(".card")).toHaveCount(0);

  // 5. Mostrar resultado
  console.log("Correcto: no existen productos con esa búsqueda");
});
