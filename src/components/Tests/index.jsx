import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"
import Sort from "./../../containers/Sort.js"

class Test extends React.Component{/*({tests,addTest,deleteTest, changeTest})=> */
componentDidMount(){
  this.props.init(this.props.match.params.category);
}
render(){
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <h1 className="title">Выберете тест:<Sort orderFields={this.props.orderFields} field={this.props.field} changeOrderField={this.props.changeOrderField}/></h1>
        <ContainerElements url={window.location.pathname} data={this.props.tests.map((element)=>{return {id:element.id, text: element.name, isReady: element.isReady}})}
              isAdmin={isAdmin} addElement={this.props.addTest} deleteElement={this.props.deleteTest} changeCheckBox={this.props.changeTest}/>
    </main>
  );
}
};
export default Test;