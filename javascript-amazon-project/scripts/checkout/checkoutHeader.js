import {calculateCartQuantity} from "../../data/cart.js";

export function renderCheckoutHeader() {
  const cartQuantity = calculateCartQuantity();
  

  const checkoutHeaderHTML = `
  
    <div class="checkout-header">
      <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="amazon.html">
            <img class="amazon-logo" src="images/amazon-logo.png" alt="amazon-logo">
            <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png" alt="amazon-mobile-logo">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<span class="js-checkout-items"></span>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" alt="checkout-lock-icon">
        </div>
      </div>
    </div>
  `;

  document.querySelector(".js-checkout-header")
    .innerHTML = checkoutHeaderHTML;
}