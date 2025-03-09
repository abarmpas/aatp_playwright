import { CommerceBasePage } from './CommerceBase.page';

export class ProductsPage extends CommerceBasePage {
  readonly _url = '/dashboard'
  products = this.page.locator('[data-test-id="products-grid"]')

  async addProductToCard(productID: number) {
    await this.products
        .locator(`[data-test-id="product-card-${productID}"]`)
        .locator(`[data-test-id="add-to-cart-button"]`)
        .click()
  }
}
