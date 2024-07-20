<<<<<<< HEAD
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
});

test("Locator syntax rules", async ({ page }) => {
    // tag Locator
    page.locator("input");
    // id Locator
    page.locator("#inputEmail1");
    // class Locator
    page.locator(".shape-rectangle");
    // attribute Locator'
    page.locator('[placeholder="Email"]');
=======
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Assertions", async ({ page }) => {
  // General assertions
  const value = 5;
  expect(value).toBe(5);

  const basicForm = page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .locator("button");

  const text = await basicForm.textContent();
  expect(text).toBe("Submit");

  // locator assertions
  await expect(basicForm).toBeVisible();

  // soft assertions
  await expect.soft(basicForm).toHaveText("Submit5");
>>>>>>> a9613f3ec3ff00b1f383e3884940a572dd5896ae
});
