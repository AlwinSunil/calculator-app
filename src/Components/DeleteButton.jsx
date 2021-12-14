import React from "react";
import { ACTIONS } from "../ACTIONS";
import { useLongPress } from "react-use";
import useRippleBtn from "../useHooks/useRippleBtn";

function DeleteButton({ dispatch }) {
    const { coords, setCoords, isRippling } = useRippleBtn();

    const onLongPress = () => {
        dispatch({ type: ACTIONS.CLEAR });
    };

    const defaultOptions = {
        isPreventDefault: true,
        delay: 300,
    };

    const longPressEvent = useLongPress(onLongPress, defaultOptions);

    return (
        <button
            {...longPressEvent}
            className="operand-btn ripple-button"
            onClick={(e) => {
                dispatch({ type: ACTIONS.DELETE_DIGIT });
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
