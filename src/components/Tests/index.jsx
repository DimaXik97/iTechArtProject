import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

class Test extends React.Component{/*({tests,addTest,deleteTest, changeTest})=> */
componentDidMount(){
  this.props.init(this.props.match.params.category);
}
render(){
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <h1 className="title"><img src={this.props.flag?"/img/sort_down.png":"/img/sort_up.png"} onClick={()=>{this.props.sort(!this.props.flag)}}/>Выберете тест:</h1>
        <ContainerElements url={window.location.pathname} data={this.props.tests.map((element)=>{return {id:element.id, text: element.name, isReady: element.isReady}})}
              isAdmin={isAdmin} addElement={this.props.addTest} deleteElement={this.props.deleteTest} changeCheckBox={this.props.changeTest}/>
    </main>
  );
}
};
export default Test;