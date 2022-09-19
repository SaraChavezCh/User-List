import { useState, useEffect } from "react";
import styleApp from "./assets/css/stylesApp.css";
import stylesUserList from './assets/css/stylesUserList.css'
import UserForm from "./Components/UserForm";
import axios from "axios";
import UsersList from "./Components/UsersList";
import TEKNOCOM from "./assets/images/TEKNOCOM.png";
import Created from "./Components/Created";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUSer, setSelectedUSer] = useState(null);

  const selectedUser = (user) => {
    setSelectedUSer(user);
  };
  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  };
  const deselectUser = () => {
    setSelectedUSer(null);
  };
  console.log(users);

  const openModal= (setIsOpen)=>{
    setIsOpen(true)

  }

  return (
    <div className="App">
      <img className="img app-t" src={TEKNOCOM} />

      <Created
      openModal={openModal}/>
      <UserForm
        deselectUser={deselectUser}
        selectedUSer={selectedUSer}
        getUsers={getUsers}
        />
      <section className="users-list">
        <UsersList
          getUsers={getUsers}
          users={users}
          selectedUser={selectedUser}
          />
      </section>
    </div>
  );
}

export default App;
