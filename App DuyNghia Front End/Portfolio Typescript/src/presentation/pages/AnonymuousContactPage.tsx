import OverLayout from "../components/OverLayout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import * as CONST from "../constants";
import Sending from "../components/Sending";

export default function AnonymuousContactPage({
  indexPage,
  setIndexPage,
}: any) {
  const form = useRef<any>();

  const [status, setStatus] = useState(CONST.NONE);
  const [fadeValue, setFadeVulue] = useState<string>(CONST.FADE_IN);

  function timeout(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    setStatus(CONST.LOADING);
    setFadeVulue(CONST.FADE_IN);
    const send = emailjs.sendForm(
      "service_p85zqfs",
      "template_zfpggdp",
      form.current,
      "7gFuTHMxNuew0HRCi"
    );
    send.then(
      (result) => {
        setStatus(CONST.SUCCESS);
      },
      (error) => {
        setStatus(CONST.FAILURE);
      }
    );
    send.then(() => {
      const timer = setTimeout(() => setFadeVulue(CONST.FADE_OUT), 1400);
      return () => clearTimeout(timer);
    });
    send.then(() => {
      const timer = setTimeout(() => setStatus(CONST.NONE), 1800);
      return () => clearTimeout(timer);
    });
    send.then(() => form.current.reset());
  };

  return (
    <>
      <div
        className={`absolute top-0 ${
          indexPage == 3 ? "right-in" : "right-out -right-[200vh]"
        } z-10 transition-all ease-linear duration-100 h-full`}
      >
        <div className="w-screen bg-light h-full flex justify-center relative z-10">
          <form onSubmit={sendEmail} ref={form}>
            <div className="h-full w-screen md:w-[950px] p-5 flex flex-col justify-start">
              <textarea
                placeholder="Do you want to tell me something?"
                className="bg-light outline-none p-5 border-x border-x-1
                 border-[#BCC0C2] font-light resize-none h-1/2 mt-10"
                name="message"
              />
              <button
                className="bg-[#807E7B] my-8 p-5 hover:bg-[#5c5954] transition-all duration-200"
                type="submit"
              >
                <p className=" font-light text-light">Send Message</p>
              </button>
            </div>
          </form>
          <button
            className=" h-screen w-36 hover:bg-[#E4E4E1] transition-all 
            duration-200 hidden md:flex items-center justify-center absolute left-0"
            onClick={() => setIndexPage(2)}
          >
            <img
              src="../../../assets/icons/icon-forward.png"
              className="w-14 h-14 pr-1"
            />
          </button>
        </div>
      </div>
      <OverLayout visible={indexPage == 3 ? true : false} />
      <Sending status={status} fadeValue={fadeValue} />
    </>
  );
}
