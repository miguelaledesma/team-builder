import React from "react";

const TeamForm = (props) => {



const handleChange = (evt) => {

  const {name, value} = evt.target

   props.change(name, value); 
}

//submit handler here
const handleSubmit = (evt) => {
    evt.preventDefault(); 
    props.submit() 
}


    return (
        <form onSubmit = {handleSubmit}>
            <label> Teammate Name 
            <input 
                placeholder = 'member name'
                value = {props.values.name}
                name = "name"
                onChange = {handleChange} 

            /> 
            </label>

            <label> Teammate GamerTag 
            <input 
                placeholder = 'Type GamerTag'
                value = {props.values.gamerTag}
                name = "gamertag"
                onChange = {handleChange} 

            /> 
            </label>

            <label> Favorite Game  
            <select value = {props.values.favGame} name = "favGame" onChange = {handleChange}>  
            {/* <input 
                placeholder = 'Games'
                value = {props.values.favGame}
                name = "favGame"
                onChange = {handleChange} 

            />  */}
            <option value = ""> --Select Option-- </option>
            <option value = "Warzone Pacific"> Call of Duty: WARZONE </option>
            <option value = "Halo Infinite"> Halo Infinite </option>
            <option value = "APEX"> APEX </option>
            <option value = "Fortnite"> Fortnite </option>
    
            
            </select>
            </label> 
        </form>
    )
}

export default TeamForm