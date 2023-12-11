import React from 'react';
function ChildComponent({ items }) {
  const filteredItems = items.filter(item => item.category === 'A');
  return (
    <div className='container ChildComponent'>
      <h3>Child Component</h3>
      <p>Filtered Items:</p>
      <ul>
        {filteredItems.map(item => (
          <li className='li'  key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ChildComponent;