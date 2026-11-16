import React from "react";

const ReactMemoHook = React.memo(({ message }) => {
  console.log("Memoized child rendered");

  return <p>{message}</p>;
});

export default ReactMemoHook;
