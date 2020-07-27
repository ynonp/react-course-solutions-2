import React, { useState } from 'react';


export default function SearchTextBox(props)
{
    const {setSearchText} = props;
 
    function onTextChange(e){
      
        const newVal=e.target.value;      
        setSearchText(newVal);        
    }

    return(
        <>
            <p>Search Text
            <input type="text" onChange={onTextChange} ></input></p>
        </>   
    )
};