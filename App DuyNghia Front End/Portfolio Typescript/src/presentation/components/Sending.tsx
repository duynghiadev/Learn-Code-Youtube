import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState, memo } from "react";
import * as CONST from "../constants";

function Sending({
  status,
  fadeValue,
}: {
  status: string;
  fadeValue: string;
}) {
  return (
    <>
      {status == CONST.NONE ? (
        <></>
      ) : (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 backdrop-blur-xl bg-dark 
        bg-opacity-5 flex flex-col items-center justify-center z-10 transition-all 
        duration-300 ${fadeValue}`}
        >
          {status == CONST.LOADING ? (
            <Player
              src="../../../assets/lotties/line-loading.json"
              className=" w-96 h-96"
              loop
              autoplay
            />
          ) : status == CONST.SUCCESS ? (
            <Player
              src="../../../assets/lotties/success-check.json"
              className=" w-96 h-96"
              loop
              autoplay
            />
          ) : (
            <Player
              src="../../../assets/lotties/failure.json"
              className=" w-48 h-48"
              loop
              autoplay
            />
          )}
        </div>
      )}
    </>
  );
}

export default memo(Sending)