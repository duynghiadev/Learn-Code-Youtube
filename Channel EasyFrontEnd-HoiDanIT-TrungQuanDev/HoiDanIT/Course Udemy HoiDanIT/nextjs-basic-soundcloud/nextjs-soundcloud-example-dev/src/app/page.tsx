import HeaderDesktop from '@/examples/header/app.header';
import BackendTrack from '@/examples/track/backend.track';
import MusicTrack from '@/examples/track/music.track';
import WaveTrack from '@/examples/track/wave.track';
import DynamicUrlTrack from '@/examples/track/remote/dynamic.url.track';
import BtnTrack from '@/examples/track/remote/btn.track';
import WavesurferHook from '@/examples/track/remote/wavesurfer.hook';
import SoundCloudTrack from '@/examples/track/remote/soundcloud.track';
import ScTime from '@/examples/track/remote/sc.time';
import CustomizeRender from '@/examples/track/remote/customize.render';
import HoverRender from '@/examples/track/remote/hover.render';
import CommentRender from '@/examples/track/remote/comment.render';
import TooltipRender from '@/examples/track/remote/tooltip.render';
import SimpleSlider from '@/examples/main/slider';
import { sendRequest } from '@/utils/api';
import { sendRequestJS } from '@/utils/old.api';
import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]/route';
import CustomLayoutTrack from '@/examples/track/custom.layout.track';

export default async function HomePage() {
  // const session = await getServerSession(authOptions);
  // console.log(">>> check session server: ", session)

  // const d = await fetch("http://localhost:8000/api/v1/tracks/top", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ category: "CHILL", limit: 10 })
  // })

  // console.log(">>> ddd: ", await d.json())
  // const d = await sendRequest<IBackendRes<any>>({
  //   url: "http://localhost:8000/api/v1/tracks/top",
  //   method: "POST",
  //   body: { category: "CHILL", limit: 10 },
  // })

  // const js = await sendRequestJS({
  //   url: "http://localhost:8000/api/v1/tracks/top",
  //   method: "POST",
  //   body: { category: "CHILL", limit: 10 },
  // })

  return (
    <div>
      {/* <HeaderDesktop /> */}
      <div style={{ height: "100px" }}>
        adfadsf
      </div>
      {/* <MusicTrack /> */}
      {/* <BackendTrack /> */}
      {/* <WaveTrack /> */}
      {/* <DynamicUrlTrack /> */}
      {/* <WavesurferHook /> */}
      {/* <BtnTrack /> */}
      {/* <SoundCloudTrack /> */}
      {/* <ScTime /> */}
      {/* <CustomizeRender /> */}
      {/* <HoverRender /> */}
      {/* <CommentRender /> */}
      {/* <TooltipRender /> */}
      {/* <SimpleSlider /> */}
      <CustomLayoutTrack />
    </div>

  );
}
