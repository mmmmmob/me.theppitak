import React from "react";

function StacksTag({ stack }) {
  return (
    <div
      className={`flex w-fit gap-x-1 rounded-xl text-gray-200 max-sm:my-1 ${stack.color} px-2 text-sm font-light`}
    >
      <div className="self-center">
        {React.createElement(stack.reactIcon, { size: 12 })}
      </div>
      {stack.name}
    </div>
  );
}

export default StacksTag;
