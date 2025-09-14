import { Locator, Page, expect } from '@playwright/test'
import BasePage from '../BasePage.ts'
import { ProductListEnum } from '../../data/productList.ts'
import Product from './Product.ts'

export default class Inventory extends BasePage {
    readonly page: Page

    // Header elements
    private get hamburgerMenu(): Locator {
        return this.page.locator('#react-burger-menu-btn')
    }

    private get swagLabsLogo(): Locator {
        return this.page.locator('.app_logo')
    }

    private get shoppingCartIcon(): Locator {
        return this.page.locator('.shopping_cart_link')
    }

    // Sub-header elements
    private get productsTitle(): Locator {
        return this.page.locator('.title')
    }

    private get productSortDropdown(): Locator {
        return this.page.locator('.product_sort_container')
    }

    private get productGrid(): Locator {
        return this.page.locator('.inventory_list')
    }

    private get productItems(): Locator {
        return this.page.locator('.inventory_item .inventory_item_label .inventory_item_name')
    }

    private get productNames(): Locator {
        return this.page.locator('.inventory_item_name')
    }

    private get productPrices(): Locator {
        return this.page.locator('.inventory_item_price')
    }

    private get productContainers(): Locator {
        return this.page.locator('.inventory_item')
    }

    private get addToCartButtons(): Locator {
        return this.page.locator('button[id^="add-to-cart"]')
    }

    private get removeFromCartButton(): Locator {
        return this.page.locator('button[id^="remove"]')
    }

    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async validateVisible(): Promise<void> {
        await expect(this.swagLabsLogo).toBeVisible()
        await expect(this.productsTitle).toBeVisible()
        await expect(this.productSortDropdown).toBeVisible()
        await expect(this.productGrid).toBeVisible()
        await expect(this.shoppingCartIcon).toBeVisible()
    }

    async validateProductsLoaded(): Promise<void> {
        await expect(this.productItems).toHaveCount(6)
        await expect(this.productNames).toHaveCount(6)
        await expect(this.productPrices).toHaveCount(6)
        await expect(this.addToCartButtons).toHaveCount(6)
    }

    async sortProducts(sortOption: string): Promise<void> {
        await this.productSortDropdown.selectOption(sortOption)
    }

    async openHamburgerMenu(): Promise<void> {
        await this.hamburgerMenu.click()
    }

    async addNthProductToCart(productName: ProductListEnum): Promise<void> {
        await this.productContainers.filter({ hasText: productName }).locator(this.addToCartButtons).click()
        await expect(this.productContainers.filter({ hasText: productName }).locator(this.removeFromCartButton)).toBeVisible()
    }

    async removeProductFromCart(productName: ProductListEnum): Promise<void> {
        await this.productContainers.filter({ hasText: productName }).locator(this.removeFromCartButton).click()
    }
    
    async navigateToProductPage(productName: ProductListEnum): Promise<Product> {
        await this.productItems.filter({ hasText: productName }).click()
        return new Product(this.page)
    }

    async validateProductAddedToCart(productName: ProductListEnum): Promise<void> {
        await expect(this.productContainers.filter({ hasText: productName }).locator(this.removeFromCartButton)).toBeVisible()
    }

    async validateProductRemovedFromCart(productName: ProductListEnum): Promise<void> {
        await expect(this.productContainers.filter({ hasText: productName }).locator(this.removeFromCartButton)).not.toBeVisible()
    }
}
