import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log(count);

  return (
    <>
      <div className="text-center m-5">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="m-3">{count}</span>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
