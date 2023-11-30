"use client";

export const Button = ({label, onClick, type, btnColor}) => {
  return (
        <>
            <button 
                onClick={onClick}
                type={type || "button"}
                className={btnColor}>
                {label}
            </button>
        </>
    )
}
