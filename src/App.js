import React, { useState } from 'react';
import './App.css';



const initialFormValue = {
  teammate: '', 
  username: '', 
  favGame: '' //going to make this a drop down list
}

console.log(initialFormValue)







function App() {

const [team, setTeam] = useState([]); 

const [values, setValues] = useState(initialFormValue)







  return (
    <div className="App">
      <h1>Teammates Form</h1>
    </div>
  );
}

export default App;
