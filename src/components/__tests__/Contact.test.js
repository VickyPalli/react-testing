import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });

  // afterAll(() => {
  //   console.log("afterAll");
  // });

  // beforeEach(() => {
  //   console.log("beforeEach");
  // });

  // afterEach(() => {
  //   console.log("afterEach");
  // });
  it("should be render", () => {
    render(<Contact />);

    const contact = screen.getByRole("heading");

    //Assertion
    expect(contact).toBeInTheDocument();
  });

  it("should have 2 input elements", () => {
    render(<Contact />);

    const allInputElement = screen.getAllByRole("textbox");

    //Assertion
    expect(allInputElement.length).toBe(2);
  });
});
