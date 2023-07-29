import Button from "../Button";

const CTA = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center px-12 py-14 bg-black-gradient rounded-[20px]">
      <div className="flex-2 flex md:mb-[0] mb-[2rem] flex-col items-start">
        <h4 className="text-white md:text-[48px] text-[38px] font-[600] font-poppins leading-[140%] mr-6">
          Lets try our service now!
        </h4>
        <p className="max-w-[500px] text-white opacity-[0.2] font-poppins md:text-[18px] text-[14px] font-[400] tracking-[0.18px] leading-[160%] ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <Button style={"ml-6"} />
      </div>
    </div>
  );
};

export default CTA;
