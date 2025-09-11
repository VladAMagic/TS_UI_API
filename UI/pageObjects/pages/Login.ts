import { Locator, Page, expect } from '@playwright/test'
import BasePage from '../BasePage.ts'
import Inventory from './Inventory.ts'

export default class Login extends BasePage {
    readonly page: Page

    private get loginFormButton(): Locator {
        return this.page.locator('#login-button')
    }

    private get usernameInput(): Locator {
        return this.page.locator('#user-name')
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password')
    }

    private get errorMessage(): Locator {
        return this.page.locator(
            '#login_button_container .error-message-container',
        )
    }

    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async validateVisible(): Promise<void> {
        await expect(this.loginFormButton).toBeVisible()
        await expect(this.usernameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
    }

    async login(username: string, password: string): Promise<Inventory> {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginFormButton.click()
        return new Inventory(this.page)
    }

    async validateLockedOutErrorMessage(): Promise<void> {
        await expect(this.errorMessage).toBeVisible()
        await expect(this.errorMessage).toContainText(
            'Epic sadface: Sorry, this user has been locked out.',
        )
    }

    async validateInvalidPasswordErrorMessage(): Promise<void> {
        await expect(this.errorMessage).toBeVisible()
        await expect(this.errorMessage).toContainText(
            'Epic sadface: Username and password do not match any user in this service',
        )
    }
}
