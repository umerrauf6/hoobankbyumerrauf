import styles, { layout } from "../../style";
import Button from "../Button";
import { features } from "../../constants";

const Feature = ({ index, icon, title, content }) => {
  return (
    <div
      className={`flex items-center flex-row p-6 feature-card rounded-[20px] ${
        index !== features.length - 1 ? "mb-7" : "mb-0"
      }`}
    >
      <div className="flex items-center justify-center  rounded-full bg-dimBlue  h-[64px] w-[64px] ">
        <img src={icon} alt="icon" className="h-[50%] w-[50%]" />
      </div>
      <div className="flex flex-1 flex-col ml-6 items-start">
        <h1 className="text-white font-poppins font-[600] text-[18px] capitalize">
          {title}
        </h1>
        <p className="font-poppins text-[16px] font-[400] text-slate-600">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className="font-poppins text-white md:text-[48px] text-[38px] font-medium">
          You do the business, we’ll handle the money.
        </h1>
        <p className=" md:text-[18px] text-[14px] text-slate-600 font-[400] font-poppins max-w-[400px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={"mt-5"} />
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <Feature key={feature.id} {...feature} index />
        ))}
      </div>
    </section>
  );
};

export default Business;
