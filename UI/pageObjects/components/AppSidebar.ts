import { Locator, Page, expect } from '@playwright/test'

import Login from '../pages/Login'
import BasePage from '../BasePage'

export default class AppSidebar extends BasePage {
    readonly page: Page

    private get logo(): Locator {
        return this.page.getByTestId('sidebar-logo')
    }

    private get homeNavigationButton(): Locator {
        return this.page.getByTestId('broker-home-navigation-button')
    }

    private get resetAppStateButton(): Locator {
        return this.page.locator('#reset_sidebar_link')
    }

    private get logoutButton(): Locator {
        return this.page.locator('#logout_sidebar_link')
    }

    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async validateVisible(): Promise<boolean> {
        await expect(this.logo).toBeVisible()
        await expect(this.homeNavigationButton).toBeVisible()
        return true
    }

    async logout(): Promise<Login> {
        await this.logoutButton.click()
        return new Login(this.page)
    }
}
