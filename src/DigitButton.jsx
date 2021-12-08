import React from "react";
import useRippleBtn from "./useRippleBtn";
import { ACTIONS } from "./App";

function DigitButton({ dispatch, digit }) {
    const { coords, setCoords, isRippling } = useRippleBtn();

    return (
        <button
            className="operand-btn ripple-button"
            onClick={(e) => {
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
                const rect = e.target.getBoundingClientRect();
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y,
                    }}
                />
            ) : (
                ""
            )}
            <p className="operand-btn-p">{digit}</p>
        </button>
    );
}

export default DigitButton;
