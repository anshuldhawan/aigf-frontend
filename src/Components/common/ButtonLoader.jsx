import React from "react";

const ButtonLoader = ({color}) => {
  return (
    <div class={`spinner-border ${color ? color : 'text-primary'}`} role="status" style={{height : "20px" , width : "20px"}}>
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default ButtonLoader;
