import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <div className="flex justify-center items-center flex-col gap-[20px]">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="border-2 border-slate-900 rounded-lg"
      >
        Enable multiselection
      </button>
      <div className="w-[500px] justify-center ">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-slate-500">
              <div
                className="text-white flex justify-between content-center cursor-pointer  "
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="h-auto text-white">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
