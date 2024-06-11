function StacksTag({ stack }) {
  return (
    <div
      className={`mt-1 w-fit rounded-xl text-gray-200 ${stack.color} px-2 text-sm font-light`}
    >
      {stack.name}
    </div>
  );
}

export default StacksTag;
