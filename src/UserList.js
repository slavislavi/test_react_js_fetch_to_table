import React from "react";
import { UserItem } from "./UserItem";

export const UserList = ({ data, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company name</th>
          <th>Website</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <UserItem userData={user} key={user.id} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};
