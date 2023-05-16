import  { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState(["Rahul","Ranjann","Arjun","Zeeshan"]);
  const [newUserName, setNewUserName] = useState('');

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    if (newUserName.trim() !== '') {
      setUsers([...users, newUserName]);
      setNewUserName('');
    }
  };

  return (
    <div className='wrapper'>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDeleteUser(index)}>Delete this</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddUser();
          }
        }}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UserList;