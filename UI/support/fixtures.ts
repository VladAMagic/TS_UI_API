import { test as base } from '@playwright/test'

import Login from '../pageObjects/pages/Login'
import AppSidebar from '../pageObjects/components/AppSidebar'
import Inventory from '../pageObjects/pages/Inventory'

const globalBeforeEach = base.extend<{
    forEachTest: void
}>({
    forEachTest: [
        async ({}, use) => {
            // This code runs before every test. Example:
            //await Server().seed();
            //use() allows the test to be executed, everything after it is part of the teardown
            await use()
            // This code runs after every test.
        },
        { auto: true },
    ],
})

type Pages = {
    loginPage: Login
    inventoryPage: Inventory
}

type Components = {
    appSidebar: AppSidebar
}

export const test = globalBeforeEach.extend<Pages & Components>({
    loginPage: async ({ page }, use) => await use(new Login(page)),
    inventoryPage: async ({ page }, use) => await use(new Inventory(page)),
    appSidebar: async ({ page }, use) => await use(new AppSidebar(page)),
})
