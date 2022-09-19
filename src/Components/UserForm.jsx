import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function UserForm({ getUsers, selectedUSer, deselectUser }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selectedUSer) {
      reset(selectedUSer);
    }
  }, [selectedUSer]);

  const submit = (data) => {
    if (selectedUSer) {
      //Updating user
      axios.put(`https://users-crud1.herokuapp.com/users/${selectedUSer.id}/`, data)
      .then(() => getUsers())
        .catch((error) => console.log(error.response));

    } else {
      //Creating user
      axios
        .post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
    clear();
  };

  const clear = () => {
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    deselectUser(null);
  };
  return (
    <form className="register-space" onSubmit={handleSubmit(submit)}>
      <h className='title'>Users Register</h>
      <div className="inputContainer">
        <label htmlFor="email"> E-mail   </label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password  </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <div className="inputContainer">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("first_name")} />
      </div>
      <div className="inputContainer">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register("last_name")} />
      </div>
      <div className="inputContainer">
        <label htmlFor="birthday">Birthday </label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <button className="button">{selectedUSer ? "Edit" : "Create"}</button>
      <button className="button" type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
}

export default UserForm;
