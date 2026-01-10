import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";
import {getProduct} from "../../data/products.js";

describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn (localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML =`
      <div class="js-checkout-items"></div>
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1'
        },{
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '1'

        }
      ]);
    });

    loadFromStorage();
    renderOrderSummary();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML='';
  });

  it ('displays the cart', () => {
    expect (
      document.querySelectorAll('.cart-item-container').length
    ).toBe(2);

    const product1 = getProduct(productId1);
    const product2 = getProduct(productId2);

    expect(
      document.querySelector(`.js-product-name-${productId1}`).innerText
    ).toBe(product1.name);

    expect(
      document.querySelector(`.js-product-name-${productId2}`).innerText
    ).toBe(product2.name);

    expect(
      document.querySelector(`.js-quantity-label-${productId1}`).innerText.trim()
    ).toBe('2');

    expect(
      document.querySelector(`.js-quantity-label-${productId2}`).innerText.trim()
    ).toBe('1');
  });

  it('removes a product', () =>{
    document.querySelector(
      `.js-delete-link[data-product-id="${productId1}"]`
    ).click();

    const product2 = getProduct(productId2);

    const remainingItem = 
      document.querySelector(`.js-cart-item-container-${productId2}`);

    expect(
      document.querySelectorAll('.cart-item-container').length
    ).toBe(1);

    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toBe(null);

    expect(
      remainingItem.querySelector('.product-name').innerText
    ).toBe(product2.name);

    expect(cart.length).toBe(1);
    expect(cart[0].productId).toBe(productId2);
  });
});