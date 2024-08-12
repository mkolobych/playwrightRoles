import { expect, type Locator, type Page } from '@playwright/test'

export class DashboardPage {
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly userProfileDropDown: Locator;
    readonly manageProfileButton: Locator;
    readonly signOutButton: Locator;
    public autoOrganizationName: Promise<string>;

    constructor(page: Page) {
        this.page = page;
        this.dashboardTitle = page.locator('xpath=//h1[@class="title"][text()="Dashboard"]');
        this.userProfileDropDown = page.locator('xpath=//button[@id="current-user"]');
        this.manageProfileButton = page.locator('//div[@class="cdk-overlay-container"]//button[1]');
        this.signOutButton = page.locator('xpath=//div[@class="cdk-overlay-container"]//button[2]');
        this.autoOrganizationName = this.generateAutoOrgName();
    };

    async generateAutoOrgName(): Promise<string> {
        const staticPart: string = "AutoOrgName:";
        const dynamicPartLength: number = 15;
        const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let dynamicPart: string = '';

        for (let i = 0; i < dynamicPartLength; i++) {
            const randomIndex: number = Math.floor(Math.random() * characters.length);
            dynamicPart += characters.charAt(randomIndex);
        }

        return staticPart + dynamicPart;
    }
};