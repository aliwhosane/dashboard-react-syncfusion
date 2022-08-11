import React from "react";

const Button = ({ backgroundColor, color, size, text, borderRadius }) => {
  return (
    <button
      style={{ color, borderRadius, backgroundColor }}
      className={`p-3 text-${size} hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
