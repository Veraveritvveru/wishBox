const MyButton = ({ ...props }) => {
  return (
    <button
      {...props}
      className="rounded-xl bg-[#DF768B] font-medium py-2 px-5 cursor-pointer
"
    ></button>
  );
};

export default MyButton;
