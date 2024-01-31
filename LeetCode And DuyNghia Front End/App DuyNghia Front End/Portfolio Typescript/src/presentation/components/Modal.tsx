import { useState } from "react";
import { dataModel } from "../pages/WorksPage";

export default function Modal({
  visible,
  setVisible,
  data,
}: {
  visible: boolean;
  setVisible: any;
  data: dataModel | undefined;
}) {
  const handleClose = () => {
    setFadeValue("fade-out");
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(setVisible(!visible));
      }, 399);
    });
    promise.then(() => {
      setFadeValue("fade-in");
    });
  };
  const [fadeValue, setFadeValue] = useState("fade-in");

  return (
    <>
      {!visible ? (
        <></>
      ) : (
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 z-[1000] 
          backdrop-blur-lg flex flex-col items-center justify-center ${fadeValue} `}
          onClick={handleClose}
        >
          <div
            className="w-full h-full md:w-4/5 md:h-4/5 bg-[#E4E4E1] rounded-3xl p-10 overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-row items-center justify-between">
              <p className="text-5xl font-light mb-3">{data?.name}</p>
              <img
                src="../../../assets/icons/close.png"
                className="w-6 h-6 mb-5 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <p className=" font-extralight">{data?.description}</p>
            <div className=" bg-[#807E7B] w-8/12 h-[1px] mt-5 mx-auto " />
            <div className="h-full overflow-y-scroll px-10 hidden-scrollbar">
              <div className="w-full lg:w-7/12 mx-auto mt-5 pb-40">
                <div className=" font-extralight flex flex-row items-center mt-3 space-x-5">
                  <p>Stack: </p>{" "}
                  <p>
                    {data?.stacks.map((item, index) => {
                      if (index == data?.stacks.length - 1) return `${item}`;
                      else return `${item}, `;
                    })}
                  </p>
                </div>
                <p className=" font-extralight flex flex-row items-center mt-3 mb-4 space-x-5">
                  <p> Source: </p>
                  <a href={data?.source} className={"text-[#2FA7D7]"}>
                    {data?.source}
                  </a>
                </p>
                <div className="flex flex-col items-center">
                  {data?.images.map((item) => {
                    return (
                      <img
                        src={item}
                        className="rounded-3xl object-cover mb-10"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
