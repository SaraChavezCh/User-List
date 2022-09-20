import { useState, useEffect } from "react";
import styleApp from "./assets/css/stylesApp.css";
import stylesUserList from './assets/css/stylesUserList.css'
import UserForm from "./Components/UserForm";
import axios from "axios";
import UsersList from "./Components/UsersList";
import TEKNOCOM from "./assets/images/TEKNOCOM.png";
import UserCreated from "./Components/UserCreated";
import PopEdit from "./Components/PopEdit";
import DeletePop from "./Components/DeletePop";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUSer, setSelectedUSer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen2, setIsEditOpen2] = useState(false);

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

  return (
    <div className="App">
      <img className="img app-t" src={TEKNOCOM} />
      <UserCreated
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <PopEdit 
      isEditOpen2={isEditOpen2} 
      setIsEditOpen2={setIsEditOpen2}/>
      <DeletePop
     
      isDeleteOpen={isDeleteOpen}
      setIsDeleteOpen={setIsDeleteOpen}
      />
      <UserForm
      isEditOpen2={isEditOpen2} 
      setIsEditOpen2={setIsEditOpen2}
      setIsOpen={setIsOpen}
        deselectUser={deselectUser}
        selectedUSer={selectedUSer}
        getUsers={getUsers}
        />
      <section className="users-list">
        <UsersList
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
          getUsers={getUsers}
          users={users}
          selectedUser={selectedUser}
          />
      </section>
    </div>
  );
}

export default App;
