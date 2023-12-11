// NestedComponent.js
import React from 'react';
import { useAuth } from './AuthContext';

const DeeplyNestedComponent = () => {
  const { authenticated, userType, logout } = useAuth();

  const magicalGreeting = authenticated
    ? `Greetings, ${userType}! You possess magical powers. 🌟`
    : 'Welcome, Muggle! Please login to unlock your magical abilities. ✨';

  return (
    <div className={`magical-container ${authenticated ? 'authenticated' : ''}`}>
      <h3>Enchanted Realm</h3>
      <p>{magicalGreeting}</p>
      {authenticated && <button onClick={logout}>Logout</button>}
    </div>
  );
};

const NestedComponent = () => {
  return (
    <div className="castle">
      <h2>Mystical Castle</h2>
      <DeeplyNestedComponent />
    </div>
  );
};

export default NestedComponent;
