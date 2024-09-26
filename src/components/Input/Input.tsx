import React, { FC, ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ icon, placeholder, className, ...props }) => {
  return (
    <div className={`flex items-center rounded-md p-2 bg-white ${className}`}>
      {icon && <div className="text-gray-400 mr-2">{icon}</div>}
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none flex-grow bg-inherit text-sm"
        {...props}
      />
    </div>
  );
};

export default Input;
