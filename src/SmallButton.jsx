import React from 'react';

function Buttons() {
  const buttonsArr = [
    'C',
    'DEL',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '−',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <>
      {buttonsArr.map((value, index) => {
        let buttonClasses = 'p-2 rounded-xl text-xl font-bold hover:bg-gray-300 m-2';

        if (value === '+' || value === '−' || value === '%' || value === '÷' || value === '×') {
          buttonClasses += ' bg-blue-200';
        } else {
          buttonClasses += ' bg-slate-100';
        }
        if (value === '+') {
          buttonClasses += ' row-span-2';
        }
        return (
          <button key={index} className={buttonClasses}>
            {value}
          </button>
        );
      })}
    </>
  );
}

export default Buttons;
