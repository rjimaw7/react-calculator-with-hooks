import React from "react";

type Props = {
  handleClick: (value: string) => void;
  handleCalculateResult: () => void;
};

const Buttons = ({ handleClick, handleCalculateResult }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={(e) => handleClick(e.currentTarget.name)}
        className="border border-black p-5"
        name="1"
      >
        1
      </button>
      <button
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="2"
        className="border border-black"
      >
        2
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="3"
      >
        3
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="4"
      >
        4
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="5"
      >
        5
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="6"
      >
        6
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="7"
      >
        7
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="8"
      >
        8
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="9"
      >
        9
      </button>
      <button
        className="border border-black p-5"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="."
      >
        .
      </button>
      <button
        className="border border-black"
        onClick={(e) => handleClick(e.currentTarget.name)}
        name="0"
      >
        0
      </button>
      <button
        className="border border-black"
        onClick={handleCalculateResult}
        name="="
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
