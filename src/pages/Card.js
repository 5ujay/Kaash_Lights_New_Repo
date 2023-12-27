import PropTypes from "prop-types";
import React from "react";
import Arrow from '../images/Arrrow.png';
import { useReducer } from "react";

import "./Card.css";

export const Card = ({ property1, className, text = "01 - Bridge", rectangleClassName }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "black-unclicked",
    });

    return (
        <div
            className={`card ${className}`}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
        >
            <div className={`overlap-group ${state.property1}`}>
                {["black-unclicked", "white-unclicked"].includes(state.property1) && (
                    <>
                        <div className="overlap">
                            <img className="vector-instance" color={state.property1 === "white-unclicked" ? "white" : "black"} src={Arrow}/>
                        </div>
                        <div className="element-bridge">{text}</div>
                    </>
                )}

                {state.property1 === "clicked" && (
                    <>
                        <div className="text-wrapper">{text}</div>
                        <img className="instance-node" color="black" src={Arrow} />
                    </>
                )}
            </div>
            <img
                className={`rectangle ${rectangleClassName}`}
                alt="Rectangle"
                src={
                    state.property1 === "clicked"
                        ? "image.png"
                        : state.property1 === "white-unclicked"
                        // ? "rectangle-4208-2.png"
                //         : "rectangle-4208.png"
                 }
            />
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "clicked") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "white-unclicked",
                };
        }
    }

    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "clicked",
            };
    }

    return state;
}

Card.propTypes = {
    property1: PropTypes.oneOf(["black-unclicked", "white-unclicked", "clicked"]),
    text: PropTypes.string,
};
export default Card;