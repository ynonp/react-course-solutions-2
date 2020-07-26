import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './list-items';
import SearchTextBox from './search-textbox';
import { useState } from 'react';

import '../css/main.css';
import searchTextbox from './search-textbox';

const CountryList = ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan' ,'Amman',
                   'Zarqa', 'Irbid', 'Aqaba','Damascus', 'Hama', 'Idlib', 
                   'Raqqa', 'Cairo', 'Alexandria', 'Giza'];


const App = () => {
  const [List, setListArray ] = useState(CountryList);

function handleSearchText(searhTxt)
{  
   if( searhTxt== '')
      setListArray(CountryList);
    else
    {      
      
     // const newList =[...List];      
      setListArray(List.filter(t => t.includes(searhTxt)));
     // console.log(List);
    }
}


  return (
    <div>
      <SearchTextBox  hendleSearchText ={handleSearchText}/>
      <ListItems list={List} ></ListItems>    
      
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
