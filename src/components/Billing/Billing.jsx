import { layout } from "../../style";
import { bill, apple, google } from "../../assets";

const Billing = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionImg}`}>
        <img src={bill} alt=" bil" />
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h2 className="text-white text-[48px] font-poppins font-[600] mb-6">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-slate-500 font-poppins text-[18px] font-[400] mb-6 ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex sm:flex-row flex-col content-center w-full  cursor-pointer items-center">
          <img
            className="md:mr-[4rem] mr-[0] mb-2 md:mb-[0]"
            src={apple}
            alt="Apple Store"
          />
          <img src={google} alt="Google" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
