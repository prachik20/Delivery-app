import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resData from "../mocks/resData.json";
import "@testing-library/jest-dom";

test("Should render the restaurants with name", () => {
  render(<RestaurantCard resData={resData} />);

  const resName = screen.getByText("Chinese Wok");
  expect(resName).toBeInTheDocument();
});
