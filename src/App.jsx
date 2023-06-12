import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './utils/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl ='https://users-crud.academlo.tech/'
  const [
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])
  
  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='container'>
      <div className='app'>
        <div className='head'>
          <h1>Users</h1>
          <button onClick={handleOpenForm}>
            <h2>+ Add a new user</h2>
          </button>
        </div>
        <div className={`form_container ${isCloseForm && 'form_close'}`} >
          <FormUsers 
            createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
          />
        </div>
        <div className='cards_container'>
          {
            users?.map(user => (
              <UserCard 
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                setIsCloseForm={setIsCloseForm}
              />
            ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
