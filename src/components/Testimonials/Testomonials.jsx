import styles from "../../style";
import { feedback } from "../../constants";
import { quotes } from "../../assets";

const Testomonials = () => {
  return (
    <section className={`${styles.flexStart} flex-col`}>
      <div className={`flex md:items-center items-start md:flex-row flex-col`}>
        <h1 className="flex-1 text-white font-poppins text-[48px] font-[600] leading-[170%]">
          What poeple are <br /> saying about us
        </h1>
        <p className="flex-1 text-slate-500 text-[18px] font-[400] leading-[180%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`flex flex-wrap mt-[2rem]`}>
        {feedback.map((feedbk) => (
          <div
            key={feedbk.key}
            className={`flex feedback-card items-start justify-between flex-1 rounded-[20px] px-10 py-12 flex-col`}
          >
            <img className="my-[3rem] " src={quotes} alt="qoutes" />
            <p className="my-10  text-white font-poppins text-[18px] leading-[180%] font-[400] tracking-[0.36px]">
              {feedbk.content}
            </p>
            <div className={`flex flex-row items-center`}>
              <img
                src={feedbk.img}
                alt={`img-${feedbk.id}`}
                className="w-[48px] h-[48px] rounded-full object-contain"
              />
              <div className={`${styles.flexStart} flex-col ml-[1rem]`}>
                <h4 className="text-white font-poppins text-[20px] font-[400] leading-[32px]">
                  {feedbk.name}
                </h4>
                <p className="font-poppins text-[16px] font-[400] text-white opacity-[0.5]">
                  {feedbk.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testomonials;
