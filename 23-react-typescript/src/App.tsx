import React from 'react';
import ToDos from './components/ToDos';

function App() {
  return (
    <div>
      <ToDos items={['steal a baby', 'Drive under influence']} />
    </div>
  );
}

export default App;
