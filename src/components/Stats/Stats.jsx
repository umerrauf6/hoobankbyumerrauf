import { stats } from "../../constants";

const Stats = () => {
  return (
    <div
      className={`flex sm:justify-between justify-center items-center flex-wrap`}
    >
      {stats.map((stat, index) => (
        <div className="flex flex-row items-center" key={stat.id}>
          <h1 className=" font-poppins md:text-[40px] text-[30px] font-medium text-white mr-4">
            {stat.value}
          </h1>
          <p
            className={` font-poppins font-[400] md:text-[21px] text-[16px] uppercase text-gradient ${
              index == stats.length - 1 ? "mr-[0]" : "sm:mr-[2rem] mr-[0]"
            }`}
          >
            {stat.title}
          </p>
          <div
            className={`w-[2px] h-[14px] bg-slate-400  hidden ${
              index == stats.length - 1 ? "hidden" : "md:flex "
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
