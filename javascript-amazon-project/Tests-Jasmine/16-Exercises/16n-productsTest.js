import {getProduct, products} from '../../data/products.js';

describe('test suite: getProduct', () => {

  it('return the correct product when productId exists', () => {

    const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const product = getProduct(productId);

    expect(product).toBeDefined();
    expect (product.id).toBe(productId);
    expect(product.name).toBe('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(product.priceCents).toBe(1090);
  });

  it('returns undefined when productId does not exist', () => {
    const product = getProduct('does-not-exist');

    expect(product).toBeUndefined();
  });
});