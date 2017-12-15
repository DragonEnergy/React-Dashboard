import React from 'react';
import Header from './Header';

const App = (props) =>{
  console.log(props);
  return(
    <div className="container">
        {props.children}
    </div>
  );
}

export default App;
