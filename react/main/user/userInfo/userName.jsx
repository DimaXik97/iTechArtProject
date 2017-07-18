import React from 'react';
let user={
    name: "Имя",
    surname: "Фамилия"
}
const UserName = ()=> {
  return (
    <div className="userName">
        <p>{user.surname}</p>
        <p>{user.name}</p>
    </div>
  );
};
export default UserName;