import { Locator, Page, expect } from '@playwright/test'
import BasePage from '../BasePage.ts'

export default class Product extends BasePage {
    readonly page: Page

    private get hamburgerMenu(): Locator {
        return this.page.locator('#react-burger-menu-btn')
    }

    private get swagLabsLogo(): Locator {
        return this.page.locator('.app_logo')
    }

    private get shoppingCartIcon(): Locator {
        return this.page.locator('.shopping_cart_link')
    }

    private get backToProductsLink(): Locator {
        return this.page.locator('[data-test="back-to-products"]')
    }

    private get productName(): Locator {
        return this.page.locator('.inventory_details_name')
    }

    private get productDescription(): Locator {
        return this.page.locator('.inventory_details_desc')
    }

    private get productPrice(): Locator {
        return this.page.locator('.inventory_details_price')
    }

    private get addToCartButton(): Locator {
        return this.page.locator('button[id^="add-to-cart"]')
    }

    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async validateVisible(): Promise<void> {
        await expect(this.swagLabsLogo).toBeVisible()
        await expect(this.backToProductsLink).toBeVisible()
        await expect(this.productName).toBeVisible()
        await expect(this.productDescription).toBeVisible()
        await expect(this.productPrice).toBeVisible()
        await expect(this.addToCartButton).toBeVisible()
    }
}