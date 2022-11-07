import { useEffect, useState } from "react";
import { UserList } from "./UserList";

const URL = "https://jsonplaceholder.typicode.com/users";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const deleteRow = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h3 className="appTitle">User table</h3>
      {!loading ? <UserList data={users} onDelete={deleteRow} /> : "Loading..."}
    </div>
  );
};
