import { Provider } from "react-redux";
import Header from "../Header";
import { screen, render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load Header component with Login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByText("Login");

  expect(login).toBeInTheDocument("Login");
});

test("Should contain Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartButton = screen.getByText("Cart (0)");

  expect(cartButton).toBeInTheDocument();
});
