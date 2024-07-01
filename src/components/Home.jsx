import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";
function Home() {
  const [users, setUsers] = useState([]);
  const handleAddUser = async (username) => {
    try {
      if (users.some(user => user.login.toLowerCase() === username.toLowerCase())) {
        alert("User already added");
        return;
      }
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.login !== username));
  };

  return (
    <>
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