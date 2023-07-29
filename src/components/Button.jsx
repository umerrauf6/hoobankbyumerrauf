const Button = ({ style }) => {
  return (
    <div
      className={` bg-blue-gradient rounded-lg outline-none text-black font-poppins font-[500] text-[18px] cursor-pointer px-6 py-4 ${style}`}
    >
      Set Started
    </div>
  );
};

export default Button;
