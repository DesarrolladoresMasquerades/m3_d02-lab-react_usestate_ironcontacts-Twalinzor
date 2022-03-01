import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

// src/App.js
import "./App.css";
import { useState } from 'react';

function App() {

  const [fiveContacts, setContacts] = useState(contacts.slice(2, 7))

  function getRandom(){
    let randomContact = contacts[Math.floor(Math.random()*contacts.length)];

    if(fiveContacts.length === contacts.length) return alert('YOU CANT ADD MORE STUFF');
    if(fiveContacts.some((elem)=> elem.id === randomContact.id)) {
      getRandom()
    } else {
      setContacts(contacts=>[...contacts, randomContact])
    }
  }

  function sortByPop(){
    const sortedCelebs = fiveContacts.slice().sort((el1, el2)=>{return el1.popularity - el2.popularity})
    setContacts(sortedCelebs)
  }

  function sortByName(){
    const sortedByName = fiveContacts.slice().sort((el1, el2)=>{
      if(el1.name < el2.name) return -1;
      if(el2.name > el1.name) return 1;
      return 0;
    })
    setContacts(sortedByName)
  }

  function remove(id){
    setContacts(fiveContacts.filter((contact)=> contact.id!==id))
  }

  return (
  <div className="App">
    <div>
      <h1>IRON CONTACTS</h1>
      <button onClick={getRandom}>Add Random Contact</button>
      <button onClick={sortByPop}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>
        {fiveContacts.map((contact)=>{
            return (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt="actor" className='tablePic'></img></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
            <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
            <td><button onClick={()=>remove(contact.id)}>KILL HIM</button></td>
          </tr>
          )
        })
        }
      </table>
    </div>
  </div>
  );
}
export default App;