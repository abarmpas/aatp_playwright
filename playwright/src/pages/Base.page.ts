import { Locator, Page, expect } from '@playwright/test';

export class BasePage {
  _url = '/';

  constructor(readonly page: Page) {}

  getLocator(
    selector: string,
    options?: { has?: Locator; hasText?: string | RegExp },
  ) {
    return this.page.locator(selector, options);
  }

  getInputByName(name: string) {
    return this.page.locator(`input[name="${name}"]`);
  }
  getTextInput(id: string) {
    return this.page.getByTestId(`text-input-component-${id}`);
  }

  async waitForNetwork() {
    await this.page.waitForLoadState('networkidle');
  }

  async open() {
    await this.page.goto(this._url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForNetwork();
  }

  async reload() {
    await this.page.reload();
    await this.page.waitForLoadState('domcontentloaded');
    await this.waitForNetwork();
  }

  async setLocalStorageData(data: Record<string, string>) {
    await this.page.evaluate((data) => {
      Object.keys(data).forEach((k) => {
        window.localStorage.setItem(k, data[k]);
      });
    }, data);
  }

  async clearAndType(locator: Locator, input: string) {
    await locator.clear();
    await locator.fill(input);
  }
}
