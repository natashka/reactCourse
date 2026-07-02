import MenuItem from "./MenuItem.jsx";

export default function Menu({ menu }) {
  return (
    <>
      <h3>Menu:</h3>
      <ul>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
