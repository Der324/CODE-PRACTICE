import { addToCart, removeFromCart, cart, loadFromStorage, updateDeliveryOption }  from "../../data/cart.js";


describe('test suite: removeFromCart', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn (localStorage, 'setItem');
  });

  it ('removes a productId that is in the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '1' 
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '1'
        }
      ]);
    });
    loadFromStorage();

    removeFromCart(productId1);

    expect (cart.length).toBe(1);
    expect(cart[0].productId).toBe(productId2);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([{
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '1'
      }])
    );
  });

  it('removes a productId that is Not in the cart (does nothing)', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    removeFromCart(productId2);

    expect(cart.length).toBe(1);
    expect(cart[0].productId).toBe(productId1);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }])
    );
  });
});

describe('test suite: updateDeliveryOption', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
        }, {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '1'
        }
      ]);
    });

    loadFromStorage();
  });

  it('updates the delivery option of a product in the cart', () => {
    updateDeliveryOption(productId1, '3');

    expect(cart.length).toBe(2);

    expect(cart[0].productId).toBe(productId1);
    expect(cart[0].deliveryOptionId).toBe('3');

    expect(cart[1].productId).toBe(productId2);
    expect(cart[1].deliveryOptionId).toBe('1');

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: '3'

        }, 
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: '1'
        }
      ])
    );
  });

  it('does nothing if productId is not in the cart', () => {
    const productIdNotInCart = 'not-in-cart-id';

    updateDeliveryOption(productIdNotInCart, '3');

    expect(cart.length).toBe(2);

    expect(cart[0]).toEqual({
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
    });

    expect(cart[1]).toEqual({
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '1'
    });

    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('does nothing if the delivery option does not exist', () => {
    localStorage.getItem.and.callFake(() => {
      return JSON.stringify([
        {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 1,
          deliveryOptionId: '1'
        }
      ]);
    });
    loadFromStorage();

    updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});

