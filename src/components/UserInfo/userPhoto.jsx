import React from 'react';

const UserPhoto = ({photo})=> {
  return (
    <div className="userPhoto">
        <img alt="userPhoto" src={photo}/>
    </div>
  );
};
export default UserPhoto;