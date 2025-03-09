import { expect, Locator } from '@playwright/test';
import { BasePage } from './Base.page';
import { HeaderComponent } from '../components/header.component';

export class CommerceBasePage extends BasePage {
  header = new HeaderComponent(this.page)

  async logout() {
    await this.header.logOutButton.click();
    await expect(this.header.logOutButton).toBeHidden();
  }
}
