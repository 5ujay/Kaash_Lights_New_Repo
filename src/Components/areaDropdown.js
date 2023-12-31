import React, { useState } from "react";
import "./LengthDropdown.css";

const LengthDropdown = () => {
  const [selectedUnit, setSelectedUnit] = useState("m2");
  const lengthUnits = ["m2", "cm2", "km2", "mm2"];

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div className="bg-[#E4E4E7]">
      <select
        id="length-dropdown"
        value={selectedUnit}
        onChange={handleUnitChange}
        className="outline-none  py-3 px-1 rounded-lg"
      >
        {lengthUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LengthDropdown;
