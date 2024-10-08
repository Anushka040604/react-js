import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#D21F3C");

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button onClick={()=>setColor('Red')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'Blue'}}>Blue</button>
          <button onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'pink'}}>Pink</button>
          <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'yellow'}}>Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default App;
