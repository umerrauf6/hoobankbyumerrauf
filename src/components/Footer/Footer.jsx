import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants/index";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex sm:flex-row flex-col  my-[3rem] justify-between items-center  w-full">
        <div className="flex-1 flex flex-col items-center">
          <img
            src={logo}
            alt="footerlogo"
            className="max-w-[266px] max-h-[73px] mb-[1rem]"
          />
          <p className="text-white opacity-[0.5] text-[18px] font-[400] leading-[32px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footerLink, index) => (
          <div
            className="flex-1 flex flex-col text-center sm:mt-[0] mt-[2rem] sm:ml-[3rem] ml-[0]"
            key={index}
          >
            <h5 className="text-white font-poppins text-[18px] font-[500] leading-[150%] ">
              {footerLink.title}
            </h5>
            <ul className="mt-[1rem]">
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className={` list-none ${
                    index === footerLink.links.length - 1
                      ? "mb-[0]"
                      : "mb-[0.5rem]"
                  }  text-[white] opacity-[0.4] font-[400] leading-[150%] font-poppins text-[16px]`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-[#3F3E45]" />
      <div className="flex sm:flex-row flex-col items-center w-full justify-between my-[2rem]">
        <span className="text-white font-poppins sm:text-[18px] text-[14px] font-[400] leading-[150%] opacity-[0.5]">
          Copyrights&copy; reserved by Umer Rauf.
        </span>
        <div className="flex flex-row items-center sm:mt-[0] mt-[1rem]">
          {socialMedia.map((links, index) => (
            <a
              className={`
              ${index === links.length - 1 ? "mr-[0]" : "mr-[2rem]"}
            `}
              key={links.id}
              href={links.link}
            >
              <img src={links.icon} alt={links.id} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
