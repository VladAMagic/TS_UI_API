import { ProductListEnum } from '../data/productList'
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

    test('should add product to cart', async ({ inventoryPage }) => {
        await inventoryPage.validateVisible()
        await inventoryPage.addNthProductToCart(ProductListEnum.BACKPACK)
        await inventoryPage.validateProductAddedToCart(ProductListEnum.BACKPACK)
    })

    test('should remove product from cart', async ({ inventoryPage }) => {
        await inventoryPage.validateVisible()
        await inventoryPage.addNthProductToCart(ProductListEnum.BACKPACK)
        await inventoryPage.validateProductAddedToCart(ProductListEnum.BACKPACK)
        await inventoryPage.removeProductFromCart(ProductListEnum.BACKPACK)
        await inventoryPage.validateProductRemovedFromCart(ProductListEnum.BACKPACK )
    })

    test('should navigate to product page', async ({ inventoryPage }) => {
        await inventoryPage.validateVisible()
        const productPage = await inventoryPage.navigateToProductPage(ProductListEnum.BACKPACK)
        await productPage.validateVisible()
    })
})
