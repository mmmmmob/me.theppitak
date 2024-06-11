import React from "react";

function StacksTag({ stack }) {
  return (
    <div
      className={`flex w-fit gap-x-1 rounded-xl text-gray-200 max-sm:my-1 ${stack.color} px-2 py-1 text-sm font-light`}
    >
      <div className="self-center">
        {React.createElement(stack.reactIcon, { size: 12 })}
      </div>
      <p className="text-xs">{stack.name}</p>
    </div>
  );
}

export default StacksTag;
