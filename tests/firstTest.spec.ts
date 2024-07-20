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
});
