import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

class Users extends React.Component{
  componentDidMount(){
    this.props.init();
  }
  render(){
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    return (
      <main >
        <h1 className="title">Выберете пользователя:</h1>
        <ContainerElements url={window.location.pathname} data={this.props.users.map((element)=>{return {id:element.id, text: element.name}})}/>
      </main>);
  }
};
export default Users;