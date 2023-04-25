import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';


function App() {

  const contacts = [
    {
      id: 1,
      name: "Ahsan",
      email: "ahsan@gmail.com"
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@gmail.com"
    }
  ]


  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <AddContact />
              <ContactList contact={contacts}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
