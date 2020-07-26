import React from 'react';

export default function ListItems(props){
    const {list} =props;

    return(
        <>
            <ul>               
                {list.map((item) => (
                <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}
