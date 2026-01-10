import { addToCart, removeFromCart, cart, loadFromStorage }  from "../../data/cart.js";


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