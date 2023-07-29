import { card } from "../../assets";
import Button from "../Button";
import { layout } from "../../style";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className="font-poppins text-white md:text-[48px] text-[38px] font-medium">
          Find a better card deal in few easy steps.
        </h1>
        <p className=" md:text-[18px] mt-4 text-[14px] text-slate-600 font-[400] font-poppins max-w-[400px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button style={"mt-5"} />
      </div>
      <div className={`${layout.sectionImg} `}>
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeal;
