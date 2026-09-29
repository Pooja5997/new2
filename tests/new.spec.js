const { test, expect } = require('@playwright/test')

test('Login to Automation Exercise', async ({ page }) => {

    // Navigate to login page
    await page.goto('https://automationexercise.com/login')

    // Verify Login to your account
    await expect(page.getByText('Login to your account')).toBeVisible()

    // Enter email
    await page.getByPlaceholder('Email Address').first().fill('test@gmail.com')

    // Enter password
    await page.getByPlaceholder('Password').fill('Test@123')

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Pause for inspection
    await page.pause()
})