import React, { useState } from "react";

const CheckBox = ({ continents, checkedContinents, onFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (continentId) => {
    const currentIndex = checkedContinents.indexOf(continentId);
    const newChecked = [...checkedContinents];

    if (currentIndex === -1) {
      newChecked.push(continentId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    onFilters(newChecked);
  };

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 bg-purple-100 rounded-md"
      >
        Category
      </button>
      {isOpen && (
        <div className="p-2 bg-purple-100 rounded-md mt-2">
          {continents?.map((continent) => (
            <div key={continent._id}>
              <input
                type="checkbox"
                onChange={() => handleToggle(continent._id)}
                checked={
                  checkedContinents.indexOf(continent._id) === -1 ? false : true
                }
              />{" "}
              <label>{continent.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckBox;
