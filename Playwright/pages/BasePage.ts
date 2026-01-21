import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to a specific URL
     * @param url The URL to navigate to
     */
    async navigate(url: string) {
        await this.page.goto(url);
    }

    /**
     * Common method to get page title
     */
    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Common method to wait for a specific time
     * Useful for visual debugging or handling flaky animations
     */
    async wait(ms: number) {
        await this.page.waitForTimeout(ms);
    }
}
