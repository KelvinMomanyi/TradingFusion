import React, { useContext, ReactNode } from "react";
import  ThemeContext  from "../context/ThemeContext";


interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  //@ts-ignore
  const {darkMode} = useContext(ThemeContext);
  return (
    <div
      className={`w-full rounded-md relative p-8 border-2 ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
