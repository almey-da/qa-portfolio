import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as cartPage from "@tests/pages/cart.page";
import * as productPage from "@tests/pages/products.page";
import * as loginPage from "@tests/pages/login.page";
import * as paymentPage from "@tests/pages/payment.page";
import { CART, PRODUCTS, ROUTES } from "../const/routes";
import { VALID_LOGIN} from "@tests/data/login.data";
import { VALID_PAYMENT } from "../data/payment.data";

describe("Checkout and Payment Test", function () {
    beforeEach(() => {
      route.visit(ROUTES.login);
    });
  
    it("Successful checkout and payment", () => {
        element.clearAndFillField(loginPage.emailField, VALID_LOGIN.email);
        element.clearAndFillField(loginPage.passwordField, VALID_LOGIN.password);
        element.click(loginPage.signinBtn);
    
        assert.containText("Logged in as abbas");

        route.visit(PRODUCTS.product);
        element.clickMultiple(productPage.addToCart);
        element.click(productPage.continueBtn);
        route.visit(CART.cart);
        element.click(cartPage.checkoutBtn);

        assert.containText("If you would like to add a comment about your order, please write it in the field below.");
        element.clearAndFillField(paymentPage.messageField, 'Please deliver safely.');
        element.click(paymentPage.placeOrderBtn);

        assert.containText("Payment");
        element.clearAndFillField(paymentPage.nameField, VALID_PAYMENT.cardName);
        element.clearAndFillField(paymentPage.numberField, VALID_PAYMENT.cardNumber);
        element.clearAndFillField(paymentPage.cvvField, VALID_PAYMENT.cardCvv);
        element.clearAndFillField(paymentPage.monthField, VALID_PAYMENT.cardExpMonth);
        element.clearAndFillField(paymentPage.yearField, VALID_PAYMENT.cardExpYear);
        element.click(paymentPage.payBtn);

        assert.containText("Congratulations! Your order has been confirmed!");
        element.click(paymentPage.continueBtn);
    });

})