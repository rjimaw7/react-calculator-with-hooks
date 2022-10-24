import { useState } from "react";
import Buttons from "./Buttons";
import Operators from "./Operators";

const Calculator = () => {
  const [calculation, setCalculation] = useState("");
  const re = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g;

  const clearFields = () => {
    setCalculation("");
  };

  const handleClick = (value: string) => {
    setCalculation(calculation + value);
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleCalculateResult = () => {
    if (!re.test(calculation)) {
      alert("Please try again");
      clearFields();
    } else {
      setCalculation(eval(calculation));
    }
  };

  return (
    <>
      <div className="border border-black container mx-auto py-5 h-screen">
        <div className="max-w-md mx-auto p-5 flex flex-col h-screen justify-center text-xl">
          <input
            type="text"
            name="textfield"
            className="border border-black text-right p-5 w-full"
            value={calculation}
            onChange={(e) => handleChange(e.currentTarget.value)}
          />
          <Operators handleClick={handleClick} clearFields={clearFields} />
          <Buttons
            handleClick={handleClick}
            handleCalculateResult={handleCalculateResult}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
