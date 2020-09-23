import React, { useState, useEffect } from "react";

const ChildComponent = (props) => {
  console.log("Child Re Render");

  useEffect(() => {
    props.fetchData("todos");
  }, [props.fetchData]);
  return <div>ChildComponent {props.title}</div>;
};

export default React.memo(ChildComponent);
