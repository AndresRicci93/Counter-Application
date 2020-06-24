import React from 'react';

const DecButton = ({decrement, onClickFunction}) => {


    const handleClick = () => {
        onClickFunction(decrement)
    }
 
     return <button onClick={handleClick}>{decrement}</button>


}

export default DecButton;