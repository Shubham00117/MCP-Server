import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;
    private readonly userRadioButton: Locator;
    private readonly termsCheckbox: Locator;
    private readonly cardTitle: Locator;

    constructor(page: Page) {
        super(page); // Initialize the BasePage with the page object
        // Using Playwright's recommended locators
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('#signInBtn');
        this.userRadioButton = page.locator('input[value="user"]');
        this.termsCheckbox = page.locator('#terms');
        this.cardTitle = page.locator('.card-title');
    }

    /**
     * Performs login operation with User radio selection and Terms acceptance
     * @param username The username to enter
     * @param password The password to enter
     */
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        // Select 'User' radio button and handle the popup if it appears
        await this.userRadioButton.check();
        await this.page.locator('#okayBtn').click(); // Confirm the 'User' role popup

        // Accept Terms and Conditions
        await this.termsCheckbox.check();

        await this.signInButton.click();
    }

    async isLoginSuccessful() {
        // Simple validation check: ensure at least one card title is visible after login
        await expect(this.cardTitle.first()).toBeVisible({ timeout: 3000 });
        return true;
    }
}
