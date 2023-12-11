import React from 'react';
import { AuthProvider } from './AuthContext';
import NestedComponent from './NestedComponent';

const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* Other components */}
        <NestedComponent />
      </div>
    </AuthProvider>
  );
};

export default App;
