import Menu from "./Menu";
import Reviews from "./Reviews";

export function RestaurantItem({restaurant}) {

    return <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <Menu menu={restaurant.menu}/>
        <Reviews reviews={restaurant.reviews}/>
    </div>;
}