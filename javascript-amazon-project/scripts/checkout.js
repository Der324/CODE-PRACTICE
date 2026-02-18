import { renderCheckoutHeader } from "./utils/CheckoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/cart-oop.js';
// import '../data/backend-practice.js';

loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

});
