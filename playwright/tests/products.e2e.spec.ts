import { expect, test } from '../src/fixtures/base.fixture';
import { STORAGE_STATE } from 'playwright.config';

test.describe('Products', () => {
    test.use({ storageState: STORAGE_STATE });

  test.beforeEach(async ({ productsPage }) => {
    await test.step('GIVEN: I navigate to Products page', async () => {
      await productsPage.open();
    });
  });

  test('should able to add product', async ({ productsPage }) => {
    const randomNumber = 1
    await test.step('AND: I add a product to the cart', async () => {
      await productsPage.addProductToCard(randomNumber)
    });

    await test.step('THEN: Cart should be updated', async () => {
      await expect(productsPage.header.cartCounter).toHaveText(`${randomNumber}`)
    });
  });
});
