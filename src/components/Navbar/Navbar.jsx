import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants/index";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(true);
  return (
    <div className="w-full flex py-6 justify-between items-center">
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />

      <ul className="sm:flex hidden">
        {navLinks.map((link, index) => {
          return (
            <li
              className={`text-slate-200 font-poppins ${
                index === navLinks.length - 1 ? `mr-0` : `mr-8`
              } cursor-pointer`}
              key={index}
            >
              {link.title}
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden">
        <img
          src={toggle ? menu : close}
          className=" w-[28px] h-[28px] object-contain"
          alt=""
          onClick={() => setToggle((prev) => !prev)}
        />
        {!toggle && (
          <div
            className={`${
              !toggle ? "flex" : "hidden"
            } bg-black-gradient px-16 py-12 absolute top-16 right-5 rounded sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((link, index) => {
                return (
                  <li
                    className={` font-poppins ${
                      index === navLinks.length - 1 ? `mr-0` : `mb-8`
                    } cursor-pointer text-white`}
                    key={index}
                  >
                    <a href={link.id}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
