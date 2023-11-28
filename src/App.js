import { useState } from 'react';
import './App.css';
import EnrolList from './EnrolList';
import Formulario from './Form/Formulario';

const initialUser = [ 
  { id: 1, fname: "Diego",  lname: "Lacasa", program: "UG", email: "Diego@gmail"}
]

function App() {
  const [users, setUsers] = useState(initialUser)
  const [value, setValue] = useState("")

  function handleAddUser(event) {
    setValue(event.target.value)
  }

  let contador = users.length

  function AddList() {
    if (value.trim() === "") {
      return;
    }

    const newUser = { id: contador, name:value }
    setUsers([...users, newUser])
    setValue("")
  }

  return (
    <div className='App'>
    //Faltan las props
      <Formulario ChangeInput={handleAddUser} Value={value} ClickButton={AddList}/>
      <hr/>
      <EnrolList Users={users}/>
    </div>
  );
}

export default App;
