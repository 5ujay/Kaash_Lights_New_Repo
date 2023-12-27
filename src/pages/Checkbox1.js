import React from "react";

const Checkbox1 = ({ id, type, name1, handleClick1, isChecked1 }) => {
  return (
    <input
      id1={id}
      name1={name1}
      type1={type}
      onChange={handleClick1}
      checked={isChecked1}
    />
  );
};

export default Checkbox1;
