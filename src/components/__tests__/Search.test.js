import Body from "../Body";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import data from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
});

it("Shuold render body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("Shuold search based on burger input text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSeach = screen.getAllByTestId("resCard");

  expect(cardsBeforeSeach.length).toBe(20);

  const inputElement = screen.getByTestId("searchInput");

  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "burger" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(inputElement).toBeInTheDocument();

  fireEvent.click(searchBtn);

  const cardsAfterSeach = screen.getAllByTestId("resCard");
  expect(cardsAfterSeach.length).toBe(4);
});
