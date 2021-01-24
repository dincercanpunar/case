import React from "react";

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input 
            className="search"
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
        />
    )
};

export default Input;
