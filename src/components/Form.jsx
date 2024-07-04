import React, { useState } from "react";

const Form = ({ onAddUser }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddUser = () => {
    if (username.trim() !== "") {
      onAddUser(username).then(() => setUsername("")).catch(() => {});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  return (
    <div className="searchbar max-w-4xl mx-auto py-12 flex space-x-4">
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
  );
};

export default Form;
