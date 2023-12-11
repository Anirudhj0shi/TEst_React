import React from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent() {
  // Sample array of items passed as props to ChildComponent
  const items = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
    { id: 3, name: 'Item 3', category: 'A' },
    { id: 4, name: 'Item 4', category: 'C' },
  ];
  return (
    <div className='container ParentComponent'>
      <h2>Parent Component</h2>
      <ChildComponent items={items} />
    </div>
  );
}
export default ParentComponent;
