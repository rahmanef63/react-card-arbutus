import React from "react";

const Card = ({ user, onDelete }) => {
  return (
    <div className="card w-70 glass relative">
      <img src={user.avatar_url} alt={user.login} />
      <div className="card-info card-body">
        <h2 className="card-title">{user.name}</h2>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Profile</button>
          </div>
        </a>
        <button 
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => onDelete(user.login)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Card;
