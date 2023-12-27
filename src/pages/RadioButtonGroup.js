import React, { useState } from 'react';
import '../pages/radio.css'

function RadioButtonGroup() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={() => handleOptionChange('option1')}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={() => handleOptionChange('option2')}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={() => handleOptionChange('option3')}
        />
        Option 3
      </label>
    </div>
  );
}

export default RadioButtonGroup;
