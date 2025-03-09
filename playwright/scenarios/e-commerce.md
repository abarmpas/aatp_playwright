# E-Commerce Test Cases
---

## 1. Login Functionality

### 1.1. Successful Login
- **Precondition**: User has a valid account.
- **Steps**:
  1. Navigate to the login page.
  2. Enter valid credentials (email and password).
  3. Click the "Login" button.
- **Expected Result**: User is redirected to the homepage or dashboard, and the login session is active.

### 1.2. Login with Invalid Credentials
- **Precondition**: User has an account but enters incorrect details.
- **Steps**:
  1. Navigate to the login page.
  2. Enter invalid credentials (e.g., wrong email or password).
  3. Click the "Login" button.
- **Expected Result**: An error message is displayed (e.g., "Invalid email or password").

### 1.3. Login with Empty Fields
- **Precondition**: User attempts to log in without entering any data.
- **Steps**:
  1. Navigate to the login page.
  2. Leave both email and password fields empty.
  3. Click the "Login" button.
- **Expected Result**: Validation messages are displayed for both fields (e.g., "Email is required" and "Password is required").


---

## 2. Add to Cart Functionality

### 2.1. Add a Single Product to Cart
- **Precondition**: User is logged in and on a product page.
- **Steps**:
  1. Navigate to a product page.
  2. Click the "Add to Cart" button.
- **Expected Result**: The product is added to the cart, and the cart icon updates to reflect the item count.

### 2.2. Add Multiple Products to Cart
- **Precondition**: User is logged in and browsing multiple products.
- **Steps**:
  1. Navigate to multiple product pages.
  2. Click the "Add to Cart" button for each product.
- **Expected Result**: All selected products are added to the cart, and the cart icon reflects the total number of items.

### 2.3. Add a Product with Quantity > 1
- **Precondition**: User is logged in and on a product page.
- **Steps**:
  1. Navigate to a product page.
  2. Increase the quantity (e.g., to 3).
  3. Click the "Add to Cart" button.
- **Expected Result**: The correct quantity of the product is added to the cart.

### 2.4. Add a Product to Cart Without Login
- **Precondition**: User is not logged in.
- **Steps**:
  1. Navigate to a product page.
  2. Click the "Add to Cart" button.
- **Expected Result**: User is redirected to the login page or prompted to log in.

---

## 3. Checkout Functionality

### 3.1. Successful Checkout
- **Precondition**: User is logged in and has items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Click the "Checkout" button.
  3. Enter valid shipping and payment details.
  4. Confirm the order.
- **Expected Result**: The order is successfully placed, and an order confirmation page is displayed.

### 3.2. Checkout with Empty Cart
- **Precondition**: User is logged in but has no items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Click the "Checkout" button.
- **Expected Result**: An error message is displayed (e.g., "Your cart is empty").

### 3.3. Checkout with Invalid Payment Details
- **Precondition**: User is logged in and has items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Click the "Checkout" button.
  3. Enter invalid payment details (e.g., expired credit card).
  4. Confirm the order.
- **Expected Result**: An error message is displayed (e.g., "Payment failed. Please check your payment details").

---

## 4. Cart Management

### 4.1. Remove a Product from Cart
- **Precondition**: User is logged in and has items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Click the "Remove" button next to a product.
- **Expected Result**: The product is removed from the cart, and the cart total is updated.

### 4.2. Update Product Quantity in Cart
- **Precondition**: User is logged in and has items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Update the quantity of a product (e.g., from 1 to 2).
  3. Click the "Update Cart" button.
- **Expected Result**: The cart total is updated to reflect the new quantity.

### 4.3. Clear Entire Cart
- **Precondition**: User is logged in and has multiple items in the cart.
- **Steps**:
  1. Navigate to the cart page.
  2. Click the "Clear Cart" button.
- **Expected Result**: All items are removed from the cart, and the cart is empty.

---

## 5. Edge Cases and Negative Scenarios

### 5.1. Checkout with Out-of-Stock Product
- **Precondition**: User adds a product to the cart, but it goes out of stock before checkout.
- **Steps**:
  1. Add a product to the cart.
  2. Wait for the product to go out of stock.
  3. Proceed to checkout.
- **Expected Result**: An error message is displayed (e.g., "Product is out of stock").

### 5.2. Session Timeout During Checkout
- **Precondition**: User is logged in and starts the checkout process but the session times out.
- **Steps**:
  1. Add items to the cart.
  2. Wait for the session to expire.
  3. Proceed to checkout.
- **Expected Result**: User is redirected to the login page, and cart items are preserved.

### 5.3. Network Failure During Checkout
- **Precondition**: User is logged in and starts the checkout process but loses internet connectivity.
- **Steps**:
  1. Add items to the cart.
  2. Start the checkout process.
  3. Simulate a network failure.
- **Expected Result**: An error message is displayed (e.g., "Network error. Please try again").

---
