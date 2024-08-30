import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/resMenu.json";
import RestaurantCategory from "../RestaurantCategory";
import NestCategory from "../NestCategory";
import ItemsList from "../ItemsList";
import appStore from "../../utils/appStore";
import Header from "../Header";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Cart from "../Cart";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should update Cart on click of items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <useRestaurantMenu />
          <RestaurantMenu>
            <RestaurantCategory>
              <ItemsList />
            </RestaurantCategory>
            <NestCategory>
              <ItemsList />
            </NestCategory>
          </RestaurantMenu>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Pot Rice (3)");

  expect(accordionHeader).toBeInTheDocument();
  fireEvent.click(accordionHeader);

  const cards = screen.getAllByTestId("restMenu");
  expect(cards.length).toBe(3);

  const cartCount = screen.getByText("Cart (0)");
  expect(cartCount).toBeInTheDocument();

  const addBtns = screen.getAllByText("+");
  console.log(addBtns.length);
  fireEvent.click(addBtns[0]);
  const cartAfterClick = screen.getByText("Cart (1)");
  expect(cartAfterClick).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(1);
});
