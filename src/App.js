import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./styles.css";
import ChildComponent from "./ChildComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const arr = useMemo(() => {
    return ["one", "two", "three"];
  }, []);

  const fetchData = useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    fetchData("todos");
  }, [fetchData]);
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <ChildComponent title="this is the title" fetchData={fetchData} />
    </div>
  );
}
