import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  /* const addUserHandler = (uName, uAge) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge }];
    });
  }; */

  return (
    <div>
      <AddUser setUsers={setUsers} /* onAddUser={addUserHandler} */ />
      <UsersList users={users} />
    </div>
  );
}

export default App;
