import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import { formatCurrency} from '../utils/money.js'; //named import
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';

/**
Improved order summary rendering by moving from manual DOM updates to a state-driven approach.
The previous implementation updated UI elements individually, which made it easy for the 
interface to drift out of sync with cart data and require a page refresh.
This refactor centralizes updates around cart state and re-renders 
all dependent UI after changes, resulting in more consistent behavior, 
clearer logic, and easier long-term maintenance.
 */


/*MASTER UI UPDATE FUNCTION*/

function updateCheckoutUI() {
  renderOrderSummary();
  renderPaymentSummary();
}

/*RENDER ORDER SUMMARY */
export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

    const deliveryDate = dayjs()
      .add(deliveryOption.deliveryDays, 'days')
      .format('dddd, MMMM D');

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container-${product.id}">
        <div class="delivery-date">
          Delivery date: ${deliveryDate}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${product.image}">

          <div class="cart-item-details">
            <div class="product-name">${product.name}</div>
            <div class="product-price">
              $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity">
              <span>
                Quantity:
                <span class="quantity-label js-quantity-label-${product.id}">
                  ${cartItem.quantity}
                </span>
              </span>

              <span
                class="update-quantity-link link-primary js-update-link"
                data-product-id="${product.id}">
                Update
              </span>

              <input
                class="quantity-input js-quantity-input-${product.id}">

              <span
                class="save-quantity-link link-primary js-save-link"
                data-product-id="${product.id}">
                Save
              </span>

              <span
                class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${product.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${renderDeliveryOptions(product, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  updateCartQuantityUI();

  attachEventListeners();
}

/*  DELIVERY OPTIONS HTML */

function renderDeliveryOptions(product, cartItem) {
  let html = '';

  deliveryOptions.forEach((option) => {
    const dateString = dayjs()
      .add(option.deliveryDays, 'days')
      .format('dddd, MMMM D');

    const priceString =
      option.priceCents === 0
        ? 'FREE'
        : `$${formatCurrency(option.priceCents)} -`;

    html += `
      <div
        class="delivery-option js-delivery-option"
        data-product-id="${product.id}"
        data-delivery-option-id="${option.id}">
        <input
          type="radio"
          ${option.id === cartItem.deliveryOptionId ? 'checked' : ''}
          name="delivery-option-${product.id}">
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">
            ${priceString} Shipping
          </div>
        </div>
      </div>
    `;
  });

  return html;
}

/*CART QUANTITY BADGE*/

function updateCartQuantityUI() {
  document.querySelector('.js-checkout-items')
    .innerHTML = `${calculateCartQuantity()} items`;
}

/* EVENT LISTENERS */

function attachEventListeners() {

  /* DELETE */

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        removeFromCart(link.dataset.productId);
        updateCheckoutUI();
      });
    });

  /* UPDATE (EDIT MODE) */

  document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );

        container.classList.add('is-editing-quantity');

        const input = document.querySelector(
          `.js-quantity-input-${productId}`
        );

        const cartItem = cart.find(
          item => item.productId === productId
        );

        input.value = cartItem.quantity;
        input.focus();
      });
    });

  /* SAVE QUANTITY */

  document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        saveQuantity(link.dataset.productId);
      });
    });

  /* ENTER KEY SAVE */

  document.querySelectorAll('.quantity-input')
    .forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const productId = input.className
            .split('js-quantity-input-')[1];
          saveQuantity(productId);
        }
      });
    });

  /* DELIVERY OPTION */

  document.querySelectorAll('.js-delivery-option')
    .forEach((option) => {
      option.addEventListener('click', () => {
        const { productId, deliveryOptionId } = option.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
        updateCheckoutUI();
      });
    });
}

/*SAVE QUANTITY LOGIC */

function saveQuantity(productId) {
  const input = document.querySelector(
    `.js-quantity-input-${productId}`
  );

  const newQuantity = Number(input.value);

  if (newQuantity < 0 || newQuantity >= 1000) {
    alert('Quantity must be between 0 and 999');
    return;
  }

  if (newQuantity === 0) {
    removeFromCart(productId);
  } else {
    updateQuantity(productId, newQuantity);
  }

  updateCheckoutUI();
}






//import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
//import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'; //default export


/*
hello();

const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));


export function renderOrderSummary() {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

  cartSummaryHTML += `
      <div class="cart-item-container 
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class= "product-image" src="${matchingProduct.image}" alt="athletic-cotton-socks-6-pairs">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: 
                <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span 
              class="update-quantity-link link-primary js-update-link" 
              data-product-id="${matchingProduct.id}">
                Update
              </span>

              <input class="quantity-input js-quantity-input-${matchingProduct.id}">

              <span 
              class="save-quantity-link link-primary js-save-link" 
              data-product-id="${matchingProduct.id}">
                Save
              </span>

              <span 
              class="delete-quantity-link link-primary js-delete-link" 
              data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays, 
        'days'
      );
      const dateString = deliveryDate.format('dddd, MMMM D');

      const priceString = deliveryOption.priceCents === 0
      ? 'FREE'
      : `$${formatCurrency(deliveryOption.priceCents)} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.js-checkout-items')
      .innerHTML = `${cartQuantity} items`;
  }

  updateCartQuantity();

  function deleteItem(productId) {
    removeFromCart(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );

    if(container) {
      container.remove();
    }
    updateCartQuantity();
  }

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        deleteItem(link.dataset.productId);
      });

      renderPaymentSummary();
    });

  document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.add('is-editing-quantity');

        const quantityInput = document.querySelector(
          `.js-quantity-input-${productId}`
        );

        const cartItem = cart.find(
          (item) => item.productId === productId
        );

        quantityInput.value = cartItem.quantity;
        quantityInput.focus();
      });
    });

    function saveQuantity(productId) {
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);

      if(newQuantity < 0 || newQuantity >= 1000) {
        alert('Quantity must be at least 0 and less than 1000');
        return;
      }

      if (newQuantity === 0) {
        deleteItem(productId);
        return;
      }

      updateQuantity(productId, newQuantity);

      document.querySelector(
        `.js-quantity-label-${productId}`
      ).innerHTML = newQuantity;

      document.querySelector(
        `.js-cart-item-container-${productId}`
      ).classList.remove('is-editing-quantity');

      updateCartQuantity();
    }

    document.querySelectorAll('.js-save-link')
      .forEach((link) => {
        link.addEventListener('click', () => {
          saveQuantity(link.dataset.productId);
        });
      });

    document.querySelectorAll('.quantity-input')
      .forEach((input) => {
        input.addEventListener('keydown', (event) => {
          if(event.key === 'Enter') {
            const productId = input.className 
              .split('js-quantity-input-')[1];
            saveQuantity(productId);
          }
        });
      });

  document.querySelectorAll('.js-delivery-option')
      .forEach((element) => {
        element.addEventListener('click', () => {
          const {productId, deliveryOptionId} = element.dataset;
          updateDeliveryOption(productId, deliveryOptionId);
          renderOrderSummary();
        });
      });
  } */

  
  


    













 

  




