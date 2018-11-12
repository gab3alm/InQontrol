import React from 'react';

const ButtonPill = (props)=>{
  return(
    <div className={`btn btn-primary btn-pill ${props.class}`}><i className={`fab ${props.icon}`}/></div>
  );
};

export default ButtonPill;