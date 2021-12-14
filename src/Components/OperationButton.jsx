import React from "react";
import { ACTIONS } from "../ACTIONS";
import useRippleBtn from "../useHooks/useRippleBtn";

function OperationButton({ dispatch, operation }) {
    const { coords, setCoords, isRippling } = useRippleBtn();

    return (
        <button
            className="operand-btn ripple-button"
            onClick={(e) => {
                dispatch({
                    type: ACTIONS.CHOOSE_OPERATION,
                    payload: { operation },
                });
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
            <p className="operand-btn-p">{operation}</p>
        </button>
    );
}

export default OperationButton;
