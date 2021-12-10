import React from "react";
import { ACTIONS } from "../App";
import useRippleBtn from "../useRippleBtn";

function DeleteButton({ dispatch }) {
    const { coords, setCoords, isRippling } = useRippleBtn();

    return (
        <button
            className="operand-btn ripple-button"
            onClick={(e) => {
                dispatch({ type: ACTIONS.CLEAR });
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
            <p className="operand-btn-p operand-btn-del">DEL</p>
        </button>
    );
}

export default DeleteButton;
