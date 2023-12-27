import React, { useState } from 'react';

function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue || '');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <div  >
      <label >{props.label}</label>
      <select value={selectedOption} onChange={handleOptionChange} className="ddown">
        <option value="" disabled >
          Select a lamp type
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;