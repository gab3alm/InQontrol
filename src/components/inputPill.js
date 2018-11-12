import React from 'react';

const InputPill = (props)=>{
  return (
    <div className="input-group input-pill">
      <div className="input-group-prepend">
        <div className="input-group-text icon-container">
          <i className={`icon fas ${props.icon}`}/>
        </div>
      </div>
      <input type={props.type} className="user-field form-control" id="inlineFormInputGroup" placeholder={props.name}/>
    </div>
  )
};

export default InputPill;