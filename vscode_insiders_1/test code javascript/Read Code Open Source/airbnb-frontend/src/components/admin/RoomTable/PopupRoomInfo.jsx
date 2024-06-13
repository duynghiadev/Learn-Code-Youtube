import React from "react";
import Iron from "../Icon/Iron";
import AirCondition from "../Icon/AirCondition";
import BedSingle from "../Icon/BedSingle";
import BedDouble from "../Icon/BedDouble";
import Door from "../Icon/Door";
import Kitchen from "../Icon/Kitchen";
import ParkingMotobyte from "../Icon/ParkingMotobyte";
import ParkingCar from "../Icon/ParkingCar";
import Shower from "../Icon/Shower";
import Swimming from "../Icon/Swimming";
import Tivi from "../Icon/Tivi";
import WashingMachine from "../Icon/WashingMachine";
import Wifi from "../Icon/Wifi";
import People from "../Icon/People";

const PopupRoomInfo = ({ room, index }) => {
  return (
    <div
      className={`hidden text-black absolute z-20 left-[30px] ${
        index < 2 ? "top-[20px]" : "bottom-[20px]"
      } bg-bg-popup p-[10px] rounded-[5px] w-[300px] min-h-[145px]  group-hover/item:block hover:hidden`}
    >
      <p className=" mb-2 uppercase text-primary">Thông tin chi tiết</p>

      <div>
        {/* <p
          className="text-[12px]"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {room.moTa}
        </p> */}
        <div className="flex">
          <div className="flex mr-5">
            <People /> x {room.khach}
          </div>
          <div className="flex mr-5">
            <Door /> x {room.phongNgu}
          </div>
          <div className="flex">
            <Shower /> x {room.phongTam}
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-500 mt-2"></div>
        <div className="flex mt-3">
          <p className=" w-[60px] text-left">Dịch vụ:</p>
          <div className=" w-[210px] flex flex-wrap  items-center justify-start">
            {room.wifi && (
              <div className="w-[25%] items-center justify-center">
                <Wifi />
              </div>
            )}
            {room.banUi && (
              <div className="w-[25%]">
                <Iron />
              </div>
            )}
            {room.dieuHoa && (
              <div className="w-[25%] items-center justify-center">
                <AirCondition />
              </div>
            )}
            {room.giuong === 1 ? (
              <div className="w-[25%] items-center justify-center">
                <BedSingle />
              </div>
            ) : (
              <div className="w-[25%] items-center justify-center">
                <BedDouble />
              </div>
            )}

            {room.bep && (
              <div className="w-[25%] items-center justify-center">
                <Kitchen />
              </div>
            )}

            {room.doXe && (
              <div className="w-[25%] items-center justify-center">
                <ParkingCar />
              </div>
            )}

            {room.hoBoi && (
              <div className="w-[25%] items-center justify-center">
                <Swimming />
              </div>
            )}
            {room.tivi && (
              <div className="w-[25%] items-center justify-center">
                <Tivi />
              </div>
            )}
            {room.mayGiat && (
              <div className="w-[25%] items-center justify-center">
                <WashingMachine />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupRoomInfo;
