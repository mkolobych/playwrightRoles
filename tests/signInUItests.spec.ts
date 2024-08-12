import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObgects/signIn';
import { DashboardPage } from '../pageObgects/dashboard';

test.describe("Sign-in flows", () => {
    test("User can Sign-in/Sign-out from the Portal", async ({ page }) => {
        const signInPage = new SignInPage(page);
        const dashboardPage = new DashboardPage(page);
        await signInPage.SignIntoBP();
        await expect(dashboardPage.dashboardTitle).toHaveText("Dashboard");

        await dashboardPage.userProfileDropDown.click();
        await dashboardPage.signOutButton.click();
        await expect(signInPage.signInTitle).toHaveText("Sign In to Midy Portal");
    });
});
