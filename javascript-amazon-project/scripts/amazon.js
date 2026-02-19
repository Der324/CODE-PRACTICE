import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid () {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <!--ploymorphism = used method without knowin the class-->
        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png" alt="checkmark-image">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div> 
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  attachAddToCartEvents();
  renderCartQuantity();
};

  function renderCartQuantity() {
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (!cartQuantityElement) return;

    cartQuantityElement.innerText = calculateCartQuantity();
  }
  

  /*
  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
  }*/
  function attachAddToCartEvents() {
    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        const productContainer = button.closest('.product-container');
        const quantitySelector = productContainer.querySelector('.js-quantity-selector');
        const quantity = Number(quantitySelector.value);

        addToCart(productId, quantity);

        renderCartQuantity();
        showAddedMessage(productContainer);
      });
    });
  };

  function generateQuantityOption() {
    let options = '';

    for (let i = 1; i <= 10; i++) {
      options += `<option value = "${i}">${i}</option>`;
    }

    return options;
  }

  function showAddedMessage(container) {
    const addedMessage = container.querySelector('.added-to-cart');
    if (!addedMessage) return;

    addedMessage.classList.add('visible');

    setTimeout(() => {
      addedMessage.classList.remove('visible');
    }, 1500);
  }
  
 



/*function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  const cartQuantityElement = document.querySelector('.js-cart-quantity');
      //.innerHTML = cartQuantity;

    if (cartQuantity === 0) {
        cartQuantityElement.innerHTML = '';
      } else {
        cartQuantityElement.innerHTML = cartQuantity;
      }
}

updateCartQuantity();

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();

      //console.log(cartQuantity);
      //console.log(cart);
      
    });
  });*/