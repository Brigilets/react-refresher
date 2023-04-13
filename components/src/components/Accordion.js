import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1); // type boolean
  // setting -1 ensures that no item is expanded before we click

  const handleClick = (newIndex) => {
    // Version 1
    // expandedIndex === newIndex
    //   ? setExpandedIndex(-1)
    //   : setExpandedIndex(newIndex);
    // Version 2 functional state update
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 justify-between bg-gray-100 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
