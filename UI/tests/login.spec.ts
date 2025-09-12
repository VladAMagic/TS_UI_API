import Inventory from '../pageObjects/pages/Inventory'
import { test } from '../support/fixtures'

const defaultPassword = process.env.DEFAULT_PASSWORD!

test.describe('Login Page user', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('')
    })

    test('should login with valid credentials', async ({ loginPage }) => {
        await loginPage.validateVisible()
        const inventoryPage = await loginPage.login(
            process.env.STANDARD_USER!,
            defaultPassword,
        )
        await inventoryPage.validateVisible()
    })

    test('should be locked out with locked out user credentials', async ({
        loginPage,
    }) => {
        await loginPage.validateVisible()
        await loginPage.login(process.env.LOCKED_OUT_USER!, defaultPassword)
        await loginPage.validateLockedOutErrorMessage()
    })

    test('should not login with invalid password', async ({ loginPage }) => {
        await loginPage.validateVisible()
        await loginPage.login(process.env.STANDARD_USER!, 'invalid_password')
        await loginPage.validateInvalidUserPasswordErrorMessage()
    })

    test('should not login with nonexistent username', async ({
        loginPage,
    }) => {
        await loginPage.validateVisible()
        await loginPage.login('nonexistent_user', defaultPassword)
        await loginPage.validateInvalidUserPasswordErrorMessage()
    })
})
