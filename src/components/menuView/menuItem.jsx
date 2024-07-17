import { useState } from "react";
import MenuList from "./menuList";

export default function MenuItem({ item }) {
  const [displayChild, setDisplayChild] = useState({});

  function handleDisplayChild(getCurrentLabel) {
    setDisplayChild({
      ...displayChild,
      [getCurrentLabel]: !displayChild[getCurrentLabel],
    });
  }
  return (
    <li>
      <div className="flex items-center gap-5 cursor-pointer">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleDisplayChild(item.label)}>
            {displayChild[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
