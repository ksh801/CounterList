import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "ненужнаяя вещь " },
    { id: 1, value: 5, name: "вилка" },
    { id: 2, value: 0, name: "кружка" },
    { id: 3, value: 0, name: "ложка" },
    { id: 4, value: 0, name: "тарелка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((el) => el.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleDecrement = (id) => {
    const newValue = counters.map((el) =>
      el.id === id ? { ...el, value: el.value - 1} : el
    );
    setCounters(newValue);
  };
  const handleIncrement = (id) => {
    const newValue = counters.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(newValue);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          {...count}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
      ))}
      <button className="btn btn-primary btn-sm mg-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
