import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { CommerceBasePage } from '../pages/CommerceBase.page';
import { ProductsPage } from '../pages/Products.page';

type PageFixtures = {
  loginPage: LoginPage;
  basePage: CommerceBasePage;
  productsPage: ProductsPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  basePage: async ({ page }, use) => {
    await use(new CommerceBasePage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});
