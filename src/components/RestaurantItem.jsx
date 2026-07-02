import Menu from "./Menu";
import Reviews from "./Reviews";

export function RestaurantItem({ restaurant }) {
  return (
    <li>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </li>
  );
}
