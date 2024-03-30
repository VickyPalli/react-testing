import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import mockRestaurantCard from "../mocks/resCardMock.json";
import withPromtedLabel from "../RestaurantCard";

it("Should be render restaurant card", () => {
  render(<RestaurantCard resData={mockRestaurantCard} />);

  const restaurantCard = screen.getByText(
    "Leon's - Burgers & Wings (Leon Grill)"
  );

  expect(restaurantCard).toBeInTheDocument();
});

// it("Should be render Promoted restaurant card", () => {
//   const promotedCard = withPromtedLabel(RestaurantCard);
//   render(<withPromtedLabel(RestaurantCard) resData={mockRestaurantCard} />);

//   const restaurantCard = screen.getByText(
//     "Leon's - Burgers & Wings (Leon Grill)"
//   );

//   expect(restaurantCard).toBeInTheDocument();
// });
