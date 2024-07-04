import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";
import Alert from "./Alert";

function Home() {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleAddUser = async (username) => {
    try {
      if (users.some(user => user.login.toLowerCase() === username.toLowerCase())) {
        setAlert({ type: "error", message: "User already exists" });
        return;
      }
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUsers([...users, data]);
      setAlert({ type: "success", message: "Successfully added user" });
    } catch (error) {
      setAlert({ type: "error", message: error.message });
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.login !== username));
    setAlert({ type: "warning", message: "User deleted" });
  };

  const handleCloseAlert = () => {
    setAlert({ type: "", message: "" });
  };

  return (
    <>
      <Alert type={alert.type} message={alert.message} onClose={handleCloseAlert} />
      <div className="App">
        <Form onAddUser={handleAddUser} />
      </div>

      <div className="App cardlist max-w-4xl mx-auto py-12">
        <CardList users={users} onDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}

export default Home;
