import { useState } from "react";
import Modal from "../components/Modal";
import OverLayout from "../components/OverLayout";
import WorkCard from "../components/WorkCard";


export interface dataModel {
  name: string;
  description: string;
  stacks: string[];
  source: string;
  images: string[];
}

export default function WorksPage({
  setIndexPage,
  indexPage,
  visibleModel,
  setVisibleModel,
}: any) {
  const [data, setData] = useState<dataModel[]>([
    {
      name: "Hexa",
      description: `Hexa is a social appication with functions such as uploading images, video or listening to
      music... It’s simulator to the copy of Instagram, Tiktok, SoundClound`,
      stacks: ["React Native", "Tailwind CSS", "Redux", "Java Script"],
      source: "https://github.com/khacvux/hexa",
      images: [
        "https://github.com/khacvux/hexa/blob/master/assets/icon.png?raw=true",
        "https://user-images.githubusercontent.com/89198872/173567581-a908ff7c-2d52-4edc-bcbd-329b470349cd.png",
        "https://user-images.githubusercontent.com/89198872/173567716-017ecfa1-2ad9-4d53-82b0-7e41d18b6b29.png",
      ],
    },
    {
      name: "Phimmoi",
      description: `An application to watch movies online using Amazon S3 to store movies, pictures`,
      stacks: [
        "React Native",
        "ReactJS",
        "Tailwind CSS",
        "Redux",
        "Type Script",
      ],
      source: "https://github.com/khacvux/phimmoi",
      images: [
        "https://user-images.githubusercontent.com/89198872/188278833-826021d7-2f43-4231-9550-7de47f0c03a7.png",
      ],
    },
    {
      name: "Smart Reminders API",
      description: ``,
      stacks: ["NestJS", "MongoDB", "Type Script"],
      source: "https://github.com/khacvux/smart-reminders-api",
      images: [
        "https://i.pinimg.com/564x/af/79/d9/af79d9292f96264bd6c657f56c150cfe.jpg",
      ],
    },
    {
      name: "Phimmoi API",
      description: ``,
      stacks: ["NestJS", "MongoDB", "Type Script"],
      source: "https://github.com/khacvux/smart-reminders-api",
      images: ["https://miro.medium.com/max/800/1*Dno6e7KS5HcdGybg9A0onQ.png"],
    },
  ]);
  const [dataInModel, setDataInModel] = useState<dataModel | undefined>();
  return (
    <>
      <div
        className={`absolute top-0 ${
          indexPage == 1 ? "left-in" : "left-out -left-[200vh]"
        } z-10 transition-all ease-linear duration-100 h-full`}
      >
        <div
          className="w-screen bg-light h-full  
             flex justify-center relative z-10"
        >
          <div className="h-full w-[950px] p-5 flex flex-col justify-start overflow-y-scroll pb-24 hidden-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {data.map((item) => {
                return (
                  <WorkCard
                    setVisibleModel={setVisibleModel}
                    item={item}
                    setDataInModel={setDataInModel}
                  />
                );
              })}
            </div>
          </div>
          <button
            className=" h-screen w-36 hover:bg-[#E4E4E1] transition-all 
            duration-200 md:flex items-center justify-center absolute right-0
            hidden"
            onClick={() => setIndexPage(2)}
          >
            <img
              src="../../../assets/icons/icon-back.png"
              className="w-14 h-14 pr-1"
            />
          </button>
        </div>
      </div>
      <OverLayout visible={indexPage == 1 ? true : false} zIndex={9} />
      <Modal
        visible={visibleModel}
        setVisible={setVisibleModel}
        data={dataInModel}
      />
    </>
  );
}
