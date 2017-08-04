import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"

class Categories extends React.Component{/*({categories, addСategory,deleteCategory, changeCategory})=> */
  componentDidMount(){
    this.props.init();
  }
  render(){
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    return (
      <main >
          <h1 className="title">Выберете категорию:</h1>
          <ContainerElements url={window.location.pathname} data={this.props.categories.map((element)=>{return {id:element.id, text: element.name, isReady: element.isReady}})}
             isAdmin={isAdmin} addElement={this.props.addСategory} deleteElement={this.props.deleteCategory} changeCheckBox={this.props.changeCategory}/>
      </main>);
    }
};
export default Categories;