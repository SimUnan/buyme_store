import React from "react";

const Input = ({placeHolder, type, name, value, onChange}) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            name={name === null ? "" : name}
            value={value === null ? "" : value}
            onChange={onChange === null ? "" : onChange}
            className="
                max-w-sm  
                max-sm:max-w-xs 
                w-full 
                border-[1px] 
                border-secondary 
                px-4 
                py-2 
                rounded-xl 
                placeholder:text-grayTxt
                placeholder:text-opacity-50
                focus:outline-none
                focus:border-primary
                focus:shadow-xl
            "
        />
    );
};

export default Input;
