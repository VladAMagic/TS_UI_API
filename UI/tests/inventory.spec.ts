import Inventory from '../pageObjects/pages/Inventory'
import { test } from '../support/fixtures'

const defaultPassword = process.env.DEFAULT_PASSWORD!

test.describe('Inventory Page', async () => {
    test.beforeEach(async ({ page, loginPage }) => {
        await page.goto('')
        await loginPage.validateVisible()
        await loginPage.login(process.env.STANDARD_USER!, defaultPassword)
    })

    test('should load products', async ({ inventoryPage }) => {
        await inventoryPage.validateVisible()
        await inventoryPage.validateProductsLoaded()
    })
})
