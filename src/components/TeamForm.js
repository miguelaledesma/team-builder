import React from "react";

const TeamForm = (props) => {

    const {values, update , submit} = props

const handleChange = (evt) => {

   const name = evt.target.name 

   const value = evt.target.value
}

//submit handler here
const handleSubmit = (evt) => {
    evt.preventDefault()
    submit() 
}


    return (
        <form>
            <label> Teammate Name 
            <input 
                placeholder = 'member name'
                value = {values.name}
                name = "name"
                onChange = {handleChange} 

            /> 
            </label>

            <label> Teammate GamerTag 
            <input 
                placeholder = 'Type GamerTag'
                value = {values.gamerTag}
                name = "gamertag"
                onChange = {handleChange} 

            /> 
            </label>

            <label> Favorite Game  
            <select>  
            <input 
                placeholder = 'Games'
                value = {values.favGame}
                name = "favGame"
                onChange = {handleChange} 

            /> 
    
            
            </select>
            </label> 
        </form>
    )
}

export default TeamForm