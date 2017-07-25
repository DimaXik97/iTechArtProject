import React from 'react';

const Content = (props)=> {
    return (
        <div className="content" id="news">
            {props.content.map((element)=>{
                return(
                     <div className="bodyContent">
                         <h2 className="title">
                            {element.title}
                        </h2>
                        {element.photo?<img src={element.photo}/>:undefined}
                        <p>{element.text}</p>
                    </div>
                )
            })}
        </div>
    );
};
export default Content;