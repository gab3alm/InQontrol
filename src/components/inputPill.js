import React from 'react';

const InputPill = (props)=>{
  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className="fas fa-user"/>
        </div>
      </div>
      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
    </div>
  )
};

export default InputPill;