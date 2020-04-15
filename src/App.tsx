import React from 'react';
import './App.css';
import Row from './components/Row';
import RowTwo from './components/RowTwo';
import { appColors } from './utils/Config';

function App() {
  return (
    <>
      <div className="App">
        
        <Row
          color={[
           appColors[0],
           appColors[0],
           appColors[0],
          ]}
          height='50vh'
          padding='5px'       
        />     
        <RowTwo
          color={[
            appColors[0],
            appColors[0],
            appColors[0],
          ]}
          height='50vh'
          padding='5px'       
        />           
      </div>


    </>
  );
}

export default App;
