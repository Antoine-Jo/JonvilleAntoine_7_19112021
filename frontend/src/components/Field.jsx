import React from "react";

const Field = ({name, value, onChange, children, type}) => {

    return (
        <div className='form_field' >
            <label htmlFor={name}>{children}</label>
            <input type={type} value={value} onChange={onChange} id={name} name={name} />
        </div>
    );
};

export default Field;