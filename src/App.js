import React, { useState } from 'react';
import TeamForm from './components/TeamForm'
import './App.css';











function App() {

const [team, setTeam] = useState([]); 

const [values, setValues] = useState({name: '', gamerTag: '', favGame: ''})

const onSubmit = () => {
  setTeam([values, ...team])
  setValues({name: '', gamerTag: '', favGame: ''})
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
      {team.map((member, index) => {
        return(
          
          <div className = "results" key ={index} > 
          
            {member.gamerTag}, {member.name}, {member.favGame}
             </div>
        )
      })}

    </div>
  );
}

export default App;
