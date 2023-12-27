import React, { useState } from 'react';
import './LengthDropdown.css'

const LengthDropdown = () => {
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const lengthUnits = ['m2','cm2','km2','mm2'];

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div>
      <select
        id="length-dropdown"
        value={selectedUnit}
        onChange={handleUnitChange}
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
