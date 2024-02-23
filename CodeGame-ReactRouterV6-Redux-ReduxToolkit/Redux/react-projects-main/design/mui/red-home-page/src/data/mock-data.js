import { AiOutlineLineChart, AiOutlineHome } from "react-icons/ai";
import { MdVideoLabel } from "react-icons/md";
import { BiTennisBall } from "react-icons/bi";
import {
  BsBoxArrowInUpRight,
  BsLaptop,
  BsCodeSlash,
  BsSun,
} from "react-icons/bs";
import { TbBrandTinder } from "react-icons/tb";
import { SiReasonstudios } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { VscCircuitBoard } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import { BsChatRight } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";

export const nestedList = [
  { id: 1, text: "Reddit iOS" },
  { id: 2, text: "Reddit Android" },
  { id: 3, text: "Rereddit" },
  { id: 4, text: "Best Communities" },
  { id: 5, text: "Communities" },
  { id: 6, text: "About Reddit" },
  { id: 7, text: "Careers" },
  { id: 8, text: "Press" },
];

export const gamingList = [
  { id: 1, text: "Valheim" },
  { id: 2, text: "Minecraft" },
  { id: 3, text: "Call Of Duty" },
];

export const sportsList = [
  { id: 1, text: "NFL" },
  { id: 2, text: "NBA" },
  { id: 3, text: "Atlanta hawks" },
];

export const cryptoList = [
  { id: 1, text: "Cardano" },
  { id: 2, text: "Dogecoin" },
  { id: 3, text: "Algorand" },
];

export const businessList = [
  { id: 1, text: "Moderna" },
  { id: 2, text: "Pfizer" },
  { id: 3, text: "gamestop" },
];

export const televisonList = [
  { id: 1, text: "Cardano" },
  { id: 2, text: "Dogecoin" },
  { id: 3, text: "Algorand" },
];

export const celebrityList = [
  { id: 1, text: "Moderna" },
  { id: 2, text: "Pfizer" },
  { id: 3, text: "gamestop" },
];

export const sideListItems = [
  { id: 1, subdivision: true, text: "Feeds" },
  { id: 2, text: "Home", icon: <AiOutlineHome size={24} /> },
  { id: 3, text: "Popular", icon: <BsBoxArrowInUpRight size={24} /> },
  { id: 4, subdivision: true, text: "Recent" },
  { id: 5, text: "r/experiencedDev", icon: <BsLaptop size={24} /> },
  { id: 6, text: "r/nextjs", icon: <BsCodeSlash size={24} /> },
  { id: 7, text: "r/tinder", icon: <TbBrandTinder size={24} /> },
  { id: 8, subdivision: true, text: "Topics" },
  {
    id: 9,
    nested: true,
    data: gamingList,
    icon: <GiConsoleController size={24} />,
    text: "Gaming",
  },
  {
    id: 10,
    nested: true,
    data: sportsList,
    icon: <BiTennisBall size={24} />,
    text: "Sports",
  },
  {
    id: 11,
    nested: true,
    data: businessList,
    icon: <AiOutlineLineChart size={24} />,
    text: "Business",
  },
  {
    id: 12,
    nested: true,
    data: cryptoList,
    icon: <VscCircuitBoard size={24} />,
    text: "Crypto",
  },
  {
    id: 13,
    nested: true,
    data: televisonList,
    icon: <MdVideoLabel size={24} />,
    text: "Television",
  },
  {
    id: 14,
    nested: true,
    data: celebrityList,
    icon: <CiUser size={24} />,
    text: "Celebrity",
  },
];

export const userProfileItems = [
  {
    id: 1,
    text: "Dark Mode",
    text2: "Light Mode",
    icon: <FaRegMoon size={24} />,
    isDarkMode: true,
    icon2: <BsSun size={24} />,
  },
  { id: 2, text: "Help Center", icon: <AiOutlineQuestionCircle size={24} /> },
  {
    id: 3,
    nested: true,
    data: nestedList,
    icon: <IoMdInformationCircleOutline size={24} />,
    text: "More",
  },
  { id: 4, divider: true },
  { id: 5, text: "Login / Sign Up", icon: <SiReasonstudios size={24} /> },
];

export const imageCardsItems = [
  {
    id: 1,
    header: "Lunar New year",
    subHeader: "Chinese astronauts celebrate new year on..",
    imageUrl: "https://picsum.photos/id/1/200/300",
    user: "r/space and more",
    icon: <CiUser size={18} />,
  },
  {
    id: 2,
    header: "Leopard 2 tanks",
    subHeader: "Poland PM slams Germanys unacceptable stance..",
    imageUrl: "https://picsum.photos/id/10/200/300",
    user: "r/space and more",
    icon: <CiUser size={18} />,
  },
  {
    id: 3,
    header: "Narendra Modi",
    subHeader: "India blocks Youtube Videos, tweets sharing..",
    imageUrl: "https://picsum.photos/id/20/200/300",
    user: "r/space and more",
    icon: <CiUser size={18} />,
  },
  {
    id: 4,
    header: "Premier League",
    subHeader: "Erling Haaland has scored his fourth premier..",
    imageUrl: "https://picsum.photos/id/26/200/300",
    user: "r/space and more",
    icon: <CiUser size={18} />,
  },
];

export const cardContentItems = [
  {
    id: 1,
    likes: "24.4k",
    icon: <CiUser />,
    user: "r/hocksy",
    postedBy: "u/paperMoonshine",
    timeAgo: "17 hours ago",
    desc: "With tears in his eyes, Bruce Boudreus final goodbye to the Vancouver fans",
    image: "https://placeimg.com/640/480/tech",
    comments: "768",
  },
  {
    id: 2,
    likes: "12.4k",
    icon: <CiUser />,
    user: "r/tommy",
    postedBy: "u/paperSunshine",
    timeAgo: "12 hours ago",
    desc: "Wanna track how well you are developing, releasing and shipping software? ",
    youtubeId: "Hrn2r7Oef7k",
    comments: "12",
  },
  {
    id: 3,
    likes: "899",
    icon: <CiUser />,
    user: "r/jim",
    postedBy: "u/hoverboo",
    timeAgo: "7 hours ago",
    desc: "Fake pink floyd fan mistake Dark side of the moon rainbow.. ",
    comments: "100",
    linkUrl: "https://www.google.com",
  },
];

export const popularCommunityItems = [
  {
    id: 1,
    header: "Popular Communities",
    content: [
      "AskReddit",
      "NoStupidQns",
      "DestinyTheGame",
      "ExpllainLikeFive",
      "AskMen",
      "LeagueOfLegends",
      "MineCraft",
      "Anime",
      "IamA",
      "AskWomen",
      "OutOfTheLoop",
      "Fitness",
      "destiny2",
      "PS4",
      "apple",
      "Twitch",
      "videos",
    ],
  },
  {
    id: 2,
    header: "Gaming",
    content: [
      "AskReddit",
      "NoStupidQns",
      "DestinyTheGame",
      "ExpllainLikeFive",
      "AskMen",
      "LeagueOfLegends",
      "MineCraft",
      "Anime",
      "IamA",
      "AskWomen",
      "OutOfTheLoop",
      "Fitness",
      "destiny2",
      "PS4",
      "apple",
      "Twitch",
      "videos",
    ],
  },
  {
    id: 3,
    header: "Sports",
    content: [
      "AskReddit",
      "NoStupidQns",
      "DestinyTheGame",
      "ExpllainLikeFive",
      "AskMen",
      "LeagueOfLegends",
      "MineCraft",
      "Anime",
      "IamA",
      "AskWomen",
      "OutOfTheLoop",
      "Fitness",
      "destiny2",
      "PS4",
      "apple",
      "Twitch",
      "videos",
    ],
  },
];

export const cardFooterItems = [
  { id: 1, icon: <BsChatRight size={18} />, comments: true, text: "Comments" },
  { id: 2, icon: <FaShare />, text: "Share" },
  { id: 3, icon: <MdOutlineSaveAlt />, text: "Save" },
];
