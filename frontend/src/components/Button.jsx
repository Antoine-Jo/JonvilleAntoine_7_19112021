import React from 'react';

const Button = ({children, type }) => {
    return (
        <div>
            <button type={type}>{children}</button>
        </div>
    );
};

export default Button;