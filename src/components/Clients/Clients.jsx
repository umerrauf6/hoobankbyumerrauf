import { airbnb, binance, coinbase, dropbox } from "../../assets";
import { clients } from "../../constants";

const Clients = () => {
  return (
    <div className={` `}>
      <div className="flex flex-wrap justify-center items-center w-full ">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex my-6 mx-6 justify-center items-center  min-w-[192px]"
          >
            <img className="w-[192px]" src={client.logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
