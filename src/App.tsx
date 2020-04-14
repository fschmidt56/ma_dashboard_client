import React from 'react';
import './App.css';
import Row from './components/Row';
import RowTwo from './components/RowTwo';

function App() {
  return (
    <>
      <div className="App">
        
        <Row
          color={[
            'rgba(23,23,23,1)',
            'rgba(23,23,23,1)',
            'rgba(23,23,23,1)',
          ]}
          height='50vh'
          padding='5px'       
        />     
        <RowTwo
          color={[
            'rgba(23,23,23,1)',
            'rgba(23,23,23,1)',
            'rgba(23,23,23,1)',
          ]}
          height='50vh'
          padding='5px'       
        />           
      </div>


    </>
  );
}

export default App;
