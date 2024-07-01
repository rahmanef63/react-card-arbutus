import React from "react";
import Card from "./Card";

const CardList = ({ users, onDeleteUser }) => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
      {users.map((user) => (
        <Card key={user.id} user={user} onDelete={onDeleteUser} />
      ))}
    </div>
  );
};

export default CardList;
