import React from 'react';

/*const Divider = (props)=>{
  return(
    <div className="divider-container">
      <div className="divider"></div>
      <div className="content">{props.text}</div>
      <div className="divider"></div>
    </div>
  );
};*/

const Divider = (props)=>{
  return(
    <div className="divider">
      <span>{props.text}</span>
    </div>
  );
};

export default Divider;