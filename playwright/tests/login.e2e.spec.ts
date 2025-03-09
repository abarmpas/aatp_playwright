import { expect, test } from '../src/fixtures/base.fixture';

test.describe('User login', () => {
    
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ loginPage }) => {
    await test.step('GIVEN: I open the application', async () => {
      await loginPage.open();
    });
  });

  test('should land on Home Page, after logging in', async ({
    loginPage,
  }) => {
    await test.step('WHEN: I attempt to login with valid credentials', async () => {
      await loginPage.login('test@test.com', 'test');
    });

    await test.step('THEN: Logout button and Cart should be visible', async () => {
      await expect(loginPage.header.logOutButton).toBeVisible()
      await expect(loginPage.header.cartButton).toBeVisible()
    });
  });

  test('should not login with invalid credentials', async ({
    loginPage,
  }) => {
    await test.step('WHEN: I attempt to login with invalid credentials', async () => {
      await loginPage.login('blah@email.com', 'invalidPassword');
    });

    await test.step('THEN: I get a failed log in message', async () => {
      await expect(loginPage.failedLoginMessage).toBeVisible()
    });

    await test.step('AND: I remain in login page', async () => {
      await expect(loginPage.signInButton).toBeVisible()
    });
  });
});
