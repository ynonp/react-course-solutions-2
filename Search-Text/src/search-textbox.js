import React from 'react';

export default function SearchTextBox(props)
{
    const {hendleSearchText} = props;
    
    function onSearchTextHendleChange(e){
        const txt = e.target.value
        hendleSearchText(txt);
    }

    return(
        <>
            <p>Search Text
            <input type="text" onChange={onSearchTextHendleChange} ></input></p>
        </>   
    )
};