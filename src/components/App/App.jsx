import ContactList from '../ContactList/ContactList'
import './App.css'
import ContactForm from '../ContactForm/ContactForm';

import SearchBox from '../SearchBox/SearchBox';

function App() {
  
  return ( 
    <div>
  <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
  <ContactList  />
</div>
  )
  
}

export default App
