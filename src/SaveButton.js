import React from 'react';


const Button = ({ save, onClickFunction} ) => {
   
   const handleClick = () => {
       onClickFunction(save)
   }

    return <button onClick={handleClick}>SAVE{save}</button>
}


export default Button;