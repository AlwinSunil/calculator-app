import React from "react";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <div className="app-container">
                <div className="output">
                    <div className="operand-previous">345</div>
                    <div className="operand-current">6512</div>
                </div>
                <div className="input">
                    <div className="input-num">
                        <button className="operand-btn">
                            <p className="operand-btn-p">7</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">8</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">9</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">4</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">5</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">6</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">1</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">2</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">3</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">0</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">.</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">=</p>
                        </button>
                    </div>

                    <div className="input-right">
                        <button className="operand-btn">
                            <p className="operand-btn-p operand-btn-del">DEL</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">÷</p>
                        </button>
                        <button className="operand-btn">
                            <p className="operand-btn-p">×</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">-</p>
                        </button>

                        <button className="operand-btn">
                            <p className="operand-btn-p">+</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
