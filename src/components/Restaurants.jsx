import { restaurants } from "../assets/mock";
import { RestaurantItem } from "./RestaurantItem";

export default function Restaurants() {
  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantItem restaurant={restaurant} key={restaurant.id} />
        ))}
      </ul>
    </div>
  );
}
