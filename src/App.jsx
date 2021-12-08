import React, { useReducer } from "react";
import DeleteButton from "./Components/DeleteButton";
import DigitButton from "./Components/DigitButton";
import OperationButton from "./Components/OperationButton";
import "./App.scss";

export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state;
            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state;
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            };

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state;
            }
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                };
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            };

        case ACTIONS.CLEAR:
            return {};
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";
    let computation = "";
    switch (operation) {
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "×":
            computation = prev * current;
            break;
        case "÷":
            computation = prev / current;
            break;
    }

    return computation.toString();
}

function App() {
    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer(reducer, {});

    return (
        <div className="app">
            <div className="app-container">
                <div className="output">
                    <div className="operand-previous">
                        {previousOperand}
                        {operation}
                    </div>
                    <div className="operand-current">{currentOperand}</div>
                </div>
                <div className="input">
                    <div className="input-num">
                        <DigitButton digit="7" dispatch={dispatch} />
                        <DigitButton digit="8" dispatch={dispatch} />
                        <DigitButton digit="9" dispatch={dispatch} />
                        <DigitButton digit="4" dispatch={dispatch} />
                        <DigitButton digit="5" dispatch={dispatch} />
                        <DigitButton digit="6" dispatch={dispatch} />
                        <DigitButton digit="1" dispatch={dispatch} />
                        <DigitButton digit="2" dispatch={dispatch} />
                        <DigitButton digit="3" dispatch={dispatch} />
                        <DigitButton digit="0" dispatch={dispatch} />
                        <DigitButton digit="." dispatch={dispatch} />
                        <OperationButton operation="=" dispatch={dispatch} />
                    </div>
                    <div className="input-right">
                        <DeleteButton dispatch={dispatch} />
                        <OperationButton operation="÷" dispatch={dispatch} />
                        <OperationButton operation="×" dispatch={dispatch} />
                        <OperationButton operation="-" dispatch={dispatch} />
                        <OperationButton operation="+" dispatch={dispatch} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
