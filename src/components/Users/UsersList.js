import React from "react";
import Card from "../UI/Card";
function UsersList(props) {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user, index) => (
          <li key={user.id}>
            {user.username} ({user.age} years old. )
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
