import React from "react";

const Field = ({name, value, onChange, children}) => {

    return (
        <div>
            <label htmlFor={name}>{children}</label>
            <input value={value} onChange={onChange} id={name} name={name}/>
        </div>
    );
};

export default Field;