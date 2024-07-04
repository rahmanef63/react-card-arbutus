import React, { useState, useEffect } from "react";
import Form from "./Form";
import CardList from "./CardList";

function Home() {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ type: "", message: "" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

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
      setAlert({ type: "info", message: "Successfully added user" });
    } catch (error) {
      setAlert({ type: "error", message: error.message });
    }
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((user) => user.login !== username));
    setAlert({ type: "warning", message: "User deleted" });
  };

  return (
    <>
      <div className="App">
        {alert.message && (
          <div role="alert" className={`alert alert-${alert.type} mb-4`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  alert.type === "info"
                    ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    : alert.type === "error"
                    ? "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    : "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                }
              />
            </svg>
            <span>{alert.message}</span>
          </div>
        )}

        <Form onAddUser={handleAddUser} />
      </div>

      <div className="App cardlist max-w-4xl mx-auto py-12">
        <CardList users={users} onDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}

export default Home;
