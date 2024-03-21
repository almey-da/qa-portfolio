import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/pages/login.page";
import * as assert from "@helpers/asserts";
import { VALID_LOGIN } from "@tests/data/login.data";

describe("Login and Logout Test", function () {
  beforeEach(() => {
    route.visit(ROUTES.login);
  });

  it("Successful login", () => {
    element.clearAndFillField(loginPage.emailField, VALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, VALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    assert.containText("Logged in as abbas");
  });

  it("Successful logout", () => {
        element.click('.fa-lock');
    
        assert.containText("Login to your account");
  });
});