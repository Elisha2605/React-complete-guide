import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // state
  const [userNameInput, setUsernameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");

  const [error, setError] = useState();

  // onSumbit
  const addUserInputHandler = (event) => {
    event.preventDefault();
    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return console.log("error 1");
    }
    if (+userAgeInput < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return console.log("errro 2");
    }
    const UserInfo = {
      userName: userNameInput,
      userAge: userAgeInput,
    };
    console.log(UserInfo);
    props.ondAddUser(userNameInput, userAgeInput);
    setUsernameInput("");
    setUserAgeInput("");
  };

  // input - username
  const userNameInputHandler = (event) => {
    setUsernameInput(event.target.value);
  };

  // input - age
  const userAgeInputHandler = (event) => {
    setUserAgeInput(event.target.value);
  };

  // error
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserInputHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userNameInput}
            onChange={userNameInputHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userAgeInput}
            onChange={userAgeInputHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
