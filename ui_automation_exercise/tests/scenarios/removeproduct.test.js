import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as assert from "@helpers/asserts";
import * as cartPage from "@tests/pages/cart.page";
import * as productPage from "@tests/pages/products.page";
import { CART } from "../const/routes";
import { BASE_URL } from "../helpers/route";

describe("Products Test", function () {
  beforeEach(() => {
    cy.visit(BASE_URL.LOGIN);
  });

  it("Remove product", () => {
    element.clickMultiple(productPage.addToCart);
    element.click(productPage.continueBtn);
    route.visit(CART.cart);
    element.click(cartPage.productDelete);

    assert.containText("Cart is empty! Click here to buy products.");
  });

})