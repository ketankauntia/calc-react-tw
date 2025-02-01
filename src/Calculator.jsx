import { useState } from 'react';
import Buttons from './SmallButton';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClicks = (value) => {
    //handling clear & del
    if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      // calculation part
      try {
        let expression = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');

        let result = eval(expression);

        if (result === Infinity || result === -Infinity) {
          setInput('Error');
        } else {
          setInput(result.toString());
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //else normally
      setInput(input + value);
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center w-95 min-h-[500px] rounded-xl shadow-lg bg-white p-4'>
      {/* UPPER PART */}
      <div className=' h-1/3 p-4 w-full flex flex-1 text-2xl font-semibold items-center mt-4 justify-end'>
        {input}
        <hr />
      </div>

      {/* LOWER PART */}
      <div className='flex-2 text-blue-500 font-800 h-2/3 w-full grid grid-cols-4 '>
        <Buttons onButtonClick={handleButtonClicks} />
      </div>
    </div>
  );
}

export default Calculator;
