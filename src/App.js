import React, { useState } from 'react';
import TeamForm from './components/TeamForm'
import './App.css';



const initialFormValue = {
  name: '', 
  gamerTag: '', 
  favGame: '' //going to make this a drop down list
}

console.log(initialFormValue)







function App() {

const [team, setTeam] = useState([]); 

const [values, setValues] = useState(initialFormValue)







  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamForm 
      values ={values}
      
      /> 
    </div>
  );
}

export default App;
