import { useEffect, useState } from "react";
import { UserList } from "./UserList";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const deleteRow = (id) => {
    setUsers([...users].filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h3 className="appTitle">User table</h3>
      {!loading ? <UserList data={users} onDelete={deleteRow} /> : "Loading..."}
    </div>
  );
};
