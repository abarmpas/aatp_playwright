import { test as setup } from './src/fixtures/base.fixture';
import * as fs from 'fs';
import { STORAGE_STATE as file } from 'playwright.config';

// If storageState exists and is later than 600sec, then skip login
const threshold = 600 * 1000;
const minutes = threshold / 60000;
const stats = fs.existsSync(file) ? fs.statSync(file) : null;
if (stats && stats.mtimeMs > new Date().getTime() - threshold) {
  // eslint-disable-next-line no-console
  console.log(
    `Skipping login: earlier than ${minutes} minutes`,
  );
} else { 
  setup(
    `LoginSetup: Performing UI login`,
    async ({ page, baseURL, loginPage, basePage }) => {
      await page.goto('/');

      await loginPage.login('test@test.com', 'test');

      await page
          .context()
          .addCookies([
          { name: 'devtools_ignore', value: 'true', url: baseURL },
          ]);
      await page.context().storageState({ path: file });
      },
  );
}