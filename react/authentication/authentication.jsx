import React from 'react';

const Main = (props)=> {
  return (
        <div className="authentication">
        <h1 className="title">{props.type}</h1>
        <form>
            {props.form}
        </form>
    </div>);
};

export default Main;