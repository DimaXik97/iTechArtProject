import React from 'react';


class Sort extends React.Component{
    render(){
        return (<span>
            <img src={this.props.order?"/img/sort_down.png":"/img/sort_up.png"} onClick={()=>{this.props.sort(!this.props.order)}}/>
            <select>
                {this.props.orderFields.map((element, num)=>{
                    return <option key={num} value={element.value}>{element.text}</option>
                })}
            </select>
        </span>)
    }

  
};

export default Sort;