import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  console.log("asdasd")
  return (
    <div>
      <h2>App component!</h2>
    </div>
  );
};

export default App;


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
