import React from 'react';

function Button({ text, outlined }) {
  return (
    <div
      className={`min-w-[80px] px-6 py-2 rounded-full font-semibold text-sm capitalize text-center cursor-pointer transition-all duration-300 ${
        outlined
          ? 'bg-backgroundClr text-textClr border-2 border-blueClr hover:bg-blueClr'
          : 'bg-blueClr text-white border-2 border-blueClr hover:shadow-lg hover:shadow-blue-500/50'
      }`}
    >
      {text}
    </div>
  );
}

export default Button;
