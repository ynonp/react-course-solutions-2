import React from 'react';

export default function ListItems(props){
    const {list ,searchText } =props;
   
    return(
        <>
            <ul>               
           {list.map(function(item)  {
               if(searchText != '')
                {
                    if(item.includes(searchText))
                        return <li key={item}>{item}</li>;
                    return;
                }
               return <li key={item}>{item}</li>;})}
                     
            </ul>
        </>
    )
}
