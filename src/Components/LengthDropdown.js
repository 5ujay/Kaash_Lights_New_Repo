import React, { useState } from 'react';
import './LengthDropdown.css';

const LengthDropdown = () => {
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const lengthUnits = ['cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'];

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
