export default function MenuItem({item}) {
    return (<li>Name: {item.name}
        <ul>
            <li>Price: {item.price}$</li>
            <li>Ingredients: {item.ingredients.join(', ')}</li>
        </ul>
    </li>);
}