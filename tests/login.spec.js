import { test, expect } from '@playwright/test'

test('Register User - Signup', async ({ page }) => {

    // Navigate to login page
    await page.goto('https://automationexercise.com/login')

    // Verify New User Signup section
    await expect(page.getByText('New User Signup!')).toBeVisible()

    // Enter name
    await page.getByPlaceholder('Name').fill('Pooja')

    // Enter email
    await page.locator('input[data-qa="signup-email"]').fill('pooja123456@gmail.com')

    // Click Signup button
    await page.getByRole('button', { name: 'Signup' }).click()

    // Verify Account Information page
    await expect(page.getByText('Enter Account Information')).toBeVisible()

    await page.waitForTimeout(5000)
})