import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-3xl 
    bg-dark bg-opacity-50 flex flex-col items-center justify-center z-10"
    >
      <Player
        src="../../../assets/lotties/line-loading.json"
        className=" w-96 h-96"
        loop
        autoplay
      />
    </div>
  );
}
