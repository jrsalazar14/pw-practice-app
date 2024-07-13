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
});
