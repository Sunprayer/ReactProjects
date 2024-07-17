import MenuItem from "./menuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-none mt-0 mb-0">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
