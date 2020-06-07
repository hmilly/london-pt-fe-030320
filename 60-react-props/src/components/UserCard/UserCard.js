import React from "react";

const UserCard = (props, i) => {
  const {user} = props
  return (
    <div className="card" key={i}>
      <p className="name">{user.name}</p>
      <p className="email">{user.email}</p>
    </div>
  );
};

export default UserCard;
