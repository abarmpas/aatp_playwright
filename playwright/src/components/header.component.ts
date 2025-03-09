import { Page } from '@playwright/test';

export class HeaderComponent {
  component = this.page.locator('[data-test-id="header-nav"]');
  logOutButton = this.component.locator('[data-test-id="logout-button"]');
  cartButton = this.component.locator('[data-test-id="cart-button"]');
  cartCounter = this.component.locator('[data-test-id="cart-count"]');
  headerTitle = this.component.locator('[data-test-id="header-title"]');

  constructor(readonly page: Page) {}

  get() {
    return this.component;
  }
}
