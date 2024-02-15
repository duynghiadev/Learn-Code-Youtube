import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const addValue = Number(amount) || 0;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-4 items-center">
        {/* Counter value */}
        <p className="text-2xl">{count}</p>

        {/* + and - button */}
        <div className="flex flex-row gap-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
        </div>

        {/* input for amount and increse by amount */}
        <div className="flex flex-row gap-4">
          <input
            className="px-4 py-2 border border-gray-700 focus:outline-none"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(incrementByAmount(addValue));
            }}
          >
            ByAmount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
