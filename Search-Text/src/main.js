import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './list-items';
import SearchTextBox from './search-textbox';
import { useState } from 'react';
import '../css/main.css';

const List = ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan' ,'Amman',
  'Zarqa', 'Irbid', 'Aqaba','Damascus', 'Hama', 'Idlib', 
  'Raqqa', 'Cairo', 'Alexandria', 'Giza'];


const App = () => {

  const [searchText, setSearchText] = useState('');



  return (
    <div>
      <button onClick={() => setSearchText('')}>Reset Filter</button>
      <SearchTextBox  setSearchText ={setSearchText}/>
      <ListItems list={List} searchText={searchText} ></ListItems>    

    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
