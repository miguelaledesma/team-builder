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
        <form className="form container"  onSubmit = {handleSubmit}>
            <div className = 'input-container'> 
            <label> Name 

            <input 
                placeholder = 'member name'
                value = {props.values.name}
                name = "name"
                onChange = {handleChange} 

            /> 
            </label>
            </div>  

            <div className = 'input-container ic1'>
            <label> GamerTag 
            <input 
                placeholder = 'GamerTag'
                value = {props.values.gamerTag}
                name = "gamerTag"
                onChange = {handleChange} 

            /> 
            </label>
            </div> 

            <div className = 'input-container ic2'> 
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
            <div className='submit'>
          <button>Submit</button>
        </div>
            </div> 
            
        </form>
    )
}

export default TeamForm