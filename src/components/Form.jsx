import React, { useState } from "react";

const Form = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handleAddUser = async () => {
    if (username.trim() === "") {
      setError("Username cannot be empty");
      return;
    }
    try {
      await onAddUser(username);
      setUsername("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  return (
    <div className="searchbar max-w-4xl mx-auto py-24 flex flex-col space-y-4">
      {error && (
        <div role="alert" className="alert alert-error">
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
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
    </div>
  );
};

export default Form;
