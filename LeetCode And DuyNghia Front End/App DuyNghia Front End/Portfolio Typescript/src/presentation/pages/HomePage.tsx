export default function HomePage({ setIndexPage }: any) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-y-scroll hidden-scrollbar">
      <div className="h-full w-full lg:w-[1200px] p-5 flex flex-col justify-start">
        <div className=" w-full flex flex-col items-center text-dark my-12">
          <p className=" text-7xl font-thin">Hello</p>
          <p className=" font-extralight">Thanks for your attention!</p>
          <div className=" bg-[#807E7B] w-9/12 h-[1px] my-5" />
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-9 gap-10 ">
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-dark w-full flex flex-col items-center lg:items-end justify-center">
              <div className=" font-light mt-2 w-4/5">
                <p className=" text-justify">
                  &emsp;&emsp;Hi, my name is Vu. I'm study at VKU a Freelancer
                  dev 😎
                </p>
                <div className=" bg-[#807E7B] w-9/12 h-[1px] mb-10 mt-5" />
                <p className="text-3xl mb-2">MY TECHNICAL SKILLS</p>
                <p className="ml-5">Programming languages:</p>
                <ul className=" list-disc ml-20 text-2xl my-1 mb-3">
                  <li>Java Script, Type Script</li>
                  <li>Swift</li>
                </ul>
                <p className="ml-5">Frameworks/Platforms:</p>
                <ul className=" list-disc ml-20 text-2xl my-1 mb-3">
                  <li>React Native, ReactJS</li>
                  <li>NestJS, ExpressJS</li>
                  <li>SwiftUI</li>
                </ul>
                <p className="ml-5 mb-2">
                  Database Management Systems: MySQL, MongoDB, PostgresSQL
                </p>
                <p className="ml-5">
                  Others: Understanding of OOP methodologies, MVC and Restful
                  API
                </p>
                <div className=" bg-[#807E7B] w-9/12 h-[1px] mb-10 mt-5" />
                <p className="text-3xl mb-2">CONTACT ME</p>
                <ul className="ml-5 space-y-2 mt-3">
                  <li>Email: duynghia22302@gmail.com</li>
                  <li>
                    Github:{" "}
                    <a
                      href="https://github.com/duynghia-123"
                      className="text-[#2FA7D7]"
                    >
                      duynghia
                    </a>
                  </li>
                  <li>
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/duynghia.22302"
                      className="text-[#2FA7D7]"
                    >
                      duynghia
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="https://github.com/khacvux/assets/raw/main/INTERN-Nguyen%20Khac%20Vu.pdf"
                      className="flex flex-row items-center"
                    >
                      <p className="text-[#2FA7D7] mr-3"> Click here </p> to
                      download my CV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-3 flex justify-center items-start pb-10">
            <img
              src="https://i.pinimg.com/564x/d3/6d/08/d36d085ad4a2d66137cfa739b2d7c7e4.jpg"
              alt="banner"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center mt-16">
          <p className=" font-extralight text-xl">Created by DuyNghia</p>
        </div>
      </div>
      <button
        className=" h-screen w-36 hover:bg-[#E4E4E1] transition-all 
            duration-200 md:flex items-center justify-center absolute left-0
            hidden"
        onClick={() => setIndexPage(1)}
      >
        <img
          src="../../../assets/icons/icon-back.png"
          className="w-14 h-14 pr-1"
        />
      </button>
      <button
        className=" h-screen w-36 hover:bg-[#E4E4E1] transition-all 
            duration-200 hidden md:flex items-center justify-center absolute right-0"
        onClick={() => setIndexPage(3)}
      >
        <img
          src="../../../assets/icons/icon-forward.png"
          className="w-14 h-14 pr-1"
        />
      </button>
    </div>
  );
}
