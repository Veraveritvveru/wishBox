const Button = ({ ...props }) => {
  return (
    <button
      {...props}
      className="border border-solid rounded-xl border-blue-600 text-blue-600 py-2 px-4 cursor-pointer
"
    ></button>
  );
};

export default Button;
