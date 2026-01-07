import { renderOrderSummary } from '../../scripts/checkout/orderSummary.js';
import { loadFromStorage, cart } from '../../data/cart.js';

describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-checkout-items"></div>
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1'
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '2'
        }
      ]);
    });

    loadFromStorage();
    renderOrderSummary();
  });

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.cart-item-container').length
    ).toBe(2);

    expect(
      document.querySelector(`.js-quantity-label-${productId1}`).innerText.trim()
    ).toBe('2');

    expect(
      document.querySelector(`.js-quantity-label-${productId2}`).innerText.trim()
    ).toBe('1');

     document.querySelector('.js-test-container').innerHTML = '';
  });

  it('removes a product', () => {
    document
      .querySelector(`.js-delete-link[data-product-id="${productId1}"]`)
      .click();

    expect(
      document.querySelectorAll('.cart-item-container').length
    ).toBe(1);

    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toBe(null);

    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toBe(null);

    expect(cart.length).toBe(1);
    expect(cart[0].productId).toBe(productId2);

     document.querySelector('.js-test-container').innerHTML ='';
  });
});