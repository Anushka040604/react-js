import React, { StrictMode } from 'react'; // Import React explicitly
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function MyApp() {
  return (
    <div>
      <h1>Custom React</h1>
    </div>
  );
}

const ReactElement = React.createElement( 
  'a',// The element type (a string for a built-in HTML element)
  { href: 'https://www.google.com', target: '_blank' },//props
  'Visit Google'//children
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement} {/*syntax of jsx*/}
    <>
    <App/>
    </>
  </StrictMode>
);
