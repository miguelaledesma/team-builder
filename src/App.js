import React, { useState } from 'react';
import TeamForm from './components/TeamForm'
import './App.css';











function App() {

const [team, setTeam] = useState([]); 

const [values, setValues] = useState({name: '', gamerTag: '', favGame: ''})

const onSubmit = () => {
  setTeam([values, ...team])
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}





  return (
    <div className="App">
      <h1>Team Builder</h1>
      <TeamForm 
      values ={values}
      change = {onChange}
      submit = {onSubmit}

      
      /> 
    </div>
  );
}

export default App;
