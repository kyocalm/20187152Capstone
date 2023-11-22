import React, { useState } from "react";

const RadioBox = ({ prices, checkedPrice, onFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 bg-purple-100 rounded-md"
      >
        Price
      </button>
      {isOpen && (
        <div className="p-2 bg-purple-100 rounded-md mt-2">
          {prices?.map((price) => (
            <div key={price._id}>
              <input
                checked={checkedPrice === price.array}
                onChange={() => onFilters(price.array)}
                type="radio"
                id={price._id}
                value={price._id}
              />{" "}
              <label htmlFor={price._id}>{price.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RadioBox;
