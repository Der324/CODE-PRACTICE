import {renderPaymentSummary} from '../../scripts/checkout/paymentSummary.js';
import {cart, loadFromStorage} from '../../data/cart.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';

describe('test suite: renderPaymentSummary', () => {

  beforeEach(() => {
    document.querySelector('.js-test-container')?.remove();

    const container = document.createElement('div');
    container.className = 'js-test-container';
    container.innerHTML = `
      <div class="js-payment-summary"></div>
    `;

    document.body.appendChild(container);

    cart.length = 0;

    spyOn (localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'

        }, 
        {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '1'

        }
      ]);
    });

    loadFromStorage();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').remove();
  });

  it ('renders correct payment summary values', () => {
    renderPaymentSummary();

    const paymentSummary = document.querySelector('.js-payment-summary');

    expect (paymentSummary.innerText).toContain('$42.75');
    expect (paymentSummary.innerText).toContain('$4.28');
    expect (paymentSummary.innerText).toContain('$47.03');
   
  });

});