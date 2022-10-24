import React from "react";

type Props = {
  clearFields: () => void;
  handleClick: (value: string) => void;
};

const Operators = ({ clearFields, handleClick }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-2 my-3">
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="+"
      >
        +
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="-"
      >
        -
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="/"
      >
        /
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="*"
      >
        *
      </button>
      <button
        className="border border-black p-5"
        onClick={clearFields}
        name="clear"
      >
        Clear
      </button>
    </div>
  );
};

export default Operators;
