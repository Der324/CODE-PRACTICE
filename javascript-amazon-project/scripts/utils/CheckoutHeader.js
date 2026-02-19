import { calculateCartQuantity } from '../../data/cart.js';

export function renderCheckoutHeader() {
  const checkoutHeaderElement = document.querySelector('.js-checkout-header');
  if (!checkoutHeaderElement) return;


  const cartQuantity = calculateCartQuantity();
  const itemText = cartQuantity === 1 ? 'Item' : 'Items';

  const checkoutHeaderHTML =
  `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>
      
      <div class="checkout-header-middle-section">
        Checkout (
          <a class="return-to-cart-link" href="amazon.html">
            <span class="js-checkout-items">
              ${cartQuantity} ${itemText}
            </span>
          </a>
        )
      </div>

      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>
  `;

  checkoutHeaderElement.innerHTML = checkoutHeaderHTML;
}


/*import {cart} from '../../data/cart.js';

export function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png">
          <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
        </a>
      </div>
      <div class="checkout-header-middle-section">
        Checkout (
         <a class="return-to-cart-link" href="amazon.html">
         <span class="js-checkout-items"></span>
        )
      </div>
      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>
  `;

  const checkoutHeaderElement = document.querySelector('.js-checkout-header');
    checkoutHeaderElement.innerHTML = checkoutHeaderHTML;

  const checkoutItemsElement = document.querySelector('.js-checkout-items');
  const itemsText = cartQuantity === 1 ? 'Item' : 'Items';
    checkoutItemsElement.innerText = `${cartQuantity} ${itemsText}`;
}*/