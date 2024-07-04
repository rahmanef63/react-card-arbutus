import React, { useState } from "react";

const Form = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setError("");
    setSuccess("");
  };

  const handleAddUser = () => {
    if (username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }
    onAddUser(username)
      .then(() => {
        setSuccess("User successfully added");
        setUsername("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  return (
    <div className="searchbar max-w-4xl mx-auto py-12 flex flex-col space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter GitHub username"
          className="input input-bordered input-primary flex-grow"
        />
        <button onClick={handleAddUser} className="btn btn-primary">
          Add User
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default Form;
