import React from "react";

const Counter = ({ onIncrease, onDecrease, number, diff, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.targer.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
