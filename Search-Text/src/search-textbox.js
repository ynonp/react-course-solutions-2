import React, { useState } from 'react';


export default function SearchTextBox(props)
{
    const {hendleSearchText} = props;
    const [val,setval] = useState('');
    function onSearchTextHendleChange(e){
      
        const newVal=e.target.value
        setval(val => newVal);
        hendleSearchText(newVal);
        
    }

    return(
        <>
            <p>Search Text
            <input type="text" value={val} onChange={onSearchTextHendleChange} ></input></p>
        </>   
    )
};