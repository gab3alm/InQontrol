import React from 'react';

const FlatButton = (props)=>{
    return(
      <button className="btn btn-primary btn-flat" disabled={(props.disabled ? "disabled" : "")}>{props.text}</button>
    );
};

export default FlatButton;