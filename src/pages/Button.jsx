import PropTypes from "prop-types";
import React from "react";
import "./button.css";

export const Button = ({ property1, className }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <div className="contact-us">
        {property1 === "default" && <>Contact us</>}

        {property1 === "variant-2" && <>Calculate</>}
      </div>
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
export default Button;