import { inputProps } from "@/types";
import React from "react";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-[500px] p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-700 placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default Input;
