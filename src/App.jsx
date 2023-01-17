import { useEffect, useState } from 'react'
import imagen14 from './assets/img/imagen14.png';
import imagen16 from './assets/img/imagen16.png';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserModals from './components/UserModals';
import UserModal from './components/UserModal';
import { useModal } from './Hooks/useModal'

function App() {

  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUserList(res.data));
  }, [])

  const getUsers = () => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUserList(res.data));
      closeForm(true)
  }

  const selectUsers = (users) => {
    //alert("seleccionando")
    setUserSelected(users);
    openForm();
  }

  const deselectUser = () => {
    setUserSelected(null);
    
  }

  const deleteUser = (id) => {
    //alert("eliminando...")
    const filteredUser = userList.filter(
      users => users.id !== id
    )
    setUserList(filteredUser);
  }

  const [isOpenForm, openForm, closeForm] = useModal(false)

  return (
    <>
    <nav className='nav-diseño'></nav>
    <div className="App">
      
      <div className='create_users'>
        <h1>Users <i class="fa-solid fa-user"></i></h1>
        <button className='button-new_user' onClick={openForm}><h3>+ add new user</h3></button>
      </div>
      <UserModal isOpen={isOpenForm} closeModal={closeForm} selectUsers={isOpenForm}>
      <UserForm
            getUsers={getUsers}
            userSelected={userSelected}
            deselectUser={deselectUser}
          />
      </UserModal>
      
      <UserList
        userList={userList}
        selectUsers={selectUsers}
        deleteUser={deleteUser}
      />
    </div>
  </>
  )
}

export default App
