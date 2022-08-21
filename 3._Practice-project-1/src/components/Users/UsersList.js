import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  return (
    <Card className={classes.users}>
      <ul onClick={deleteHandler}>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
