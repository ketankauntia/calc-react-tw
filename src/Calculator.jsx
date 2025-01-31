import React from 'react';
import Buttons from './SmallButton';

function Calculator() {
  return (
    <div className=' flex flex-col justify-center items-center w-95 min-h-[500px] rounded-xl shadow-lg bg-white p-4'>
      {/* UPPER PART */}
      <div className=' h-1/3 p-4 w-full flex flex-1 text-2xl font-semibold items-center mt-4 justify-end'>
        Calulcated output
        <hr />
      </div>

      {/* LOWER PART */}
      <div className='flex-2 text-blue-500 font-800 h-2/3 w-full grid grid-cols-4 '>
        <Buttons />
      </div>
    </div>
  );
}

export default Calculator;
