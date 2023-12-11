import React, { useState } from 'react';

// Counter component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>{count}</h1><br/>
      <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
        count +1
      </button><br/>
      <button className='btn btn-warning' onClick={() => setCount((count) => count - 1)}>
        count -1
      </button>
    </div>
  );
}

export default Counter;