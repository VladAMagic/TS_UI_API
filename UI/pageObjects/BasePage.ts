import { Locator, Page, Request, Response, expect } from '@playwright/test'

export default class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.page.waitForLoadState('load')
        this.page.waitForLoadState('domcontentloaded')
    }

    protected async waitForAnyElementToBeVisible(
        locators: Locator[],
        timeout: number = 30000,
    ): Promise<Locator> {
        const promises = locators.map((locator) =>
            locator.waitFor({ state: 'visible', timeout }).then(() => locator),
        )

        try {
            return await Promise.any(promises)
        } catch {
            throw new Error(
                'None of the locators became visible within the timeout',
            )
        }
    }

    protected async waitForAnyElementToBeAttached(
        locators: Locator[],
        timeout: number = 30000,
    ): Promise<Locator> {
        const promises = locators.map((locator) =>
            locator.waitFor({ state: 'attached', timeout }).then(() => locator),
        )

        try {
            return await Promise.any(promises)
        } catch {
            throw new Error(
                'None of the locators became visible within the timeout',
            )
        }
    }
}
