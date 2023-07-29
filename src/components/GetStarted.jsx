import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`sm:${styles.flexCenter} hidden ml-8 mt-6 rounded-full bg-blue-gradient h-[140px] w-[140px] p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter}  rounded-full bg-black h-[100%] w-[100%]`}
      >
        <div
          className={`${styles.flexStart} flex-col  text-gradient  font-medium font-poppins text-[18px] `}
        >
          <span className={`${styles.flexCenter}`}>
            Get
            <img src={arrowUp} alt="" />
          </span>
          <span>Started</span>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
