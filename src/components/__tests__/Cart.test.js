import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import data from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => Promise.resolve(data),
    });
  });
});
it("Should render restaurant menu component", async () => {
  await act(async () => render(<RestaurantMenu />));
});
