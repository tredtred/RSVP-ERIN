import React from 'react';

interface RSVPButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
  isActive: boolean;
  checkmark?: React.ReactNode;
}

const RSVPButton: React.FC<RSVPButtonProps> = ({ text, icon, onClick, color, isActive, checkmark }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 flex items-center space-x-2 shadow-lg hover:shadow-xl ${isActive ? 'ring-2 ring-offset-2 ring-white' : ''} relative`}
    >
      {icon}
      <span>{text}</span>
      {checkmark}
    </button>
  );
};

export default RSVPButton;