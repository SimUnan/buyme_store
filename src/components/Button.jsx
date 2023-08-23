import React from 'react'

const Button = ({type, onClick, btnLabel}) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            className="
                max-w-sm  
                max-sm:max-w-xs 
                w-full 
                bg-secondary 
                text-black 
                text-lg 
                font-montserrat 
                px-4 
                py-2 
                rounded-xl 
                hover:bg-btn 
                focus:bg-btn
            "
        >
            {btnLabel}
        </button>
    )
}

export default Button
