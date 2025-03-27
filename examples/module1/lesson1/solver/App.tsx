import { useState } from 'react';
import { MathOperation } from './calculator/math-operation';
import type { CalculationResult } from './calculator/CalculationResult';
import { Button } from './calculator/Button';

const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculate = (
    mathOperation: (a: number, b: number) => CalculationResult
  ) => {
    const { result, error } = mathOperation(firstInput, secondInput);

    if (error) {
      setError(error);
    } else if (result) {
      setResult(result);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstInput || ''}
          onChange={(e) => setFirstInput(Number(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInput || ''}
          onChange={(e) => setSecondInput(Number(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(MathOperation.add)}>+</Button>
        <Button onClick={() => calculate(MathOperation.subtract)}>-</Button>
        <Button onClick={() => calculate(MathOperation.multiply)}>*</Button>
        <Button onClick={() => calculate(MathOperation.divide)}>/</Button>
      </div>
      {error ? <p>{error}</p> : <p>Result: {result}</p>}
    </div>
  );
};

export default App;
