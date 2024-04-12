import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  function handleSelection(getCurrentId) {}

  return (
    <div className="wrapper">
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div onClick={() => handleSelection(dataItem.id)}>
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
