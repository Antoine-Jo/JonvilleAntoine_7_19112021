import React from 'react';

const Button = ({children, type }) => {
    return (
        <div>
            <button className="btn_form" type={type}>{children}</button>
        </div>
    );
};

export default Button;