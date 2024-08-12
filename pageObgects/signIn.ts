import { expect, type Locator, type Page } from '@playwright/test';
import { email, password, websiteURL, token } from '../userCredentials.ts';

export class SignInPage {
    readonly page: Page;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly sigInButton: Locator;
    readonly signInTitle: Locator;
    readonly supportLink: Locator;
    readonly aboutUsLink: Locator;
    readonly privacyPolicyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginEmailField = page.locator('xpath=//input[@id="email"]');
        this.loginPasswordField = page.locator('xpath=//input[@id="password"]');
        this.sigInButton = page.locator('xpath=//button[@type="submit"][@class="button size-l primary"]');
        this.supportLink = page.locator('li:nth-child(1) a:nth-child(1) span:nth-child(1)');
        this.signInTitle = page.locator('//h1[normalize-space()="Sign In to Midy Portal"]');
        this.aboutUsLink = page.locator('li:nth-child(2) a:nth-child(1) span:nth-child(1)');
        this.privacyPolicyLink = page.locator('//a[@class="link"]//span[@class="label"][normalize-space()="Privacy Policy"]');
    };

    async goto() {
        await this.page.goto(websiteURL);
    };

    async SignIntoBP() {
        await this.page.goto(websiteURL);
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
        await this.sigInButton.click();
    };
};