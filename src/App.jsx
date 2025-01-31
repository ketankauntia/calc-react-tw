import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-400'>
      {/* <p className='bg-slate-500'>Hi there</p> */}
      <Calculator />
    </div>
  );
}

export default App;
