import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as productPage from "@tests/pages/products.page";
import * as assert from "@helpers/asserts";
import { PRODUCTS } from "../const/routes";

describe("Products Test", function () {
  beforeEach(() => {
    route.visit(PRODUCTS.product);
  });

  it("Successfully searched product", () => {
    element.clearAndFillField(productPage.searchBar, "blue top");
    element.click(productPage.searchIcon)

    assert.containText("Blue Top ");
  });

})