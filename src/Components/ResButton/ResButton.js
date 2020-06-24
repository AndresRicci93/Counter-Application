import React from "react";

const ResButton = ({ onClickFunction }) => {
  const handleClick = () => {
    onClickFunction();
  };

  return <button onClick={handleClick}>RESET</button>;
};

export default ResButton;