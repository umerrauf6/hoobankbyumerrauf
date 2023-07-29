import styles from "../../style";
import { robot, discount } from "../../assets/index";
import GetStarted from "../GetStarted";
const Hero = () => {
  return (
    <div className={`${styles.paddingY} flex md:flex-row flex-col`}>
      <div className={`${styles.flexStart} flex-col flex-1`}>
        <div
          className={`flex flex-row  items-center  font-poppins text-white bg-discount-gradient px-3 py-2 rounded`}
        >
          <img className="h-[32px] w-[32px] " src={discount} alt="Discount" />
          <div className="md:text-[18px] sm:text-[16px] text-[12px]">
            20% <span className="text-slate-400">Discount for</span> 1 month
            <span className="text-slate-400"> Account</span>
          </div>
        </div>
        <div className={`${styles.flexStart} items-center`}>
          <div className="flex-1 font-poppins md:text-[72px] sm:text-[52px] text-[42px] font-semibold text-white ">
            <p className="">The Next</p>
            <span className="text-gradient">Generation</span>
          </div>
          <GetStarted />
        </div>
        <div className=" font-poppins  md:text-[72px] sm:text-[52px] text-[42px] font-semibold text-white">
          Payment Method.
        </div>
        <div className="text-slate-400 font-poppins md:text-[18px] font-[400] md:mt-[50px] mt-0 leading-[170%] max-w-[70%]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
      </div>
      <div className="flex-1 h-[100%] w-[100%] relative z-[10] md:mt-0 mt-[2rem]">
        <img src={robot} alt="Robot" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
  );
};

export default Hero;
