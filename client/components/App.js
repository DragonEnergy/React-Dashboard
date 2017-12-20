import React from 'react';
import Header from './Header';

const App = (props) =>{
  return(
    <div className="container">
        {props.children}
        <h1>Welcome</h1>
    </div>
  );
}

export default App;
