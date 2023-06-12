const UserCard = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

  return (
    <article className="card">
        <h2>{`${user.first_name}`}</h2>
        <h2>{`${user.last_name}`}</h2>
        <hr />
        <ul>
            <li> <span>Email</span> <br /> {user.email}</li>
            <li> <span>Birthday</span> <br /> {user.birthday}</li>
        </ul>
        <div className="card_btns">
            <button onClick={handleDelete}><i className="bx bx-trash"></i></button>
            <button onClick={handleEdit}><i className="bx bx-edit"></i></button>
        </div>
    </article>
  )
}

export default UserCard
