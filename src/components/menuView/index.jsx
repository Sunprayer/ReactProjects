import MenuList from "./menuList";

export default function SideMenu({ menus = [] }) {
  return (
    <div className="min-h-28 w-[380px] bg-slate-600">
      <MenuList list={menus} />
    </div>
  );
}
