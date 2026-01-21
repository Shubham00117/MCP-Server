import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testConfig } from '../test.config';

test.describe('Login Functionality', () => {

    test('Login test', async ({ page }) => {
        // Arrange
        const loginPage = new LoginPage(page);
        const { baseURL, username, password } = testConfig;


        // Act
        await loginPage.navigate(baseURL);
        await loginPage.login(username, password);

        // Assert
        const success = await loginPage.isLoginSuccessful();
        expect(success).toBeTruthy();
    });

});
