import profileImg from "./images/profile.jpg";
import image1 from "./images/svg-1.svg";
import image2 from "./images/svg-2.svg";
import image3 from "./images/svg-3.svg";
import { IoDiamond } from "react-icons/io5";
import { GiGoldBar, GiStoneBlock } from "react-icons/gi";

export const homeObjOne = {
  lightBg: false,
  imgStart: false,
  primary: true,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Marketing Agency",
  heading: "Lead Generation Specialist for Online Business",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals",
  buttonLabel: "Get Started",
  start: false,
  src: image1,
  alt: "Image-1",
};
export const homeObjTwo = {
  lightBg: true,
  imgStart: true,
  primary: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Marketing Agency",
  heading: "Lead Generation Specialist for Online Business",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals",
  buttonLabel: "Get Started",
  start: true,
  src: profileImg,
  alt: "Profile",
};
export const homeObjThree = {
  lightBg: false,
  imgStart: false,
  primary: true,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Marketing Agency",
  heading: "Lead Generation Specialist for Online Business",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals",
  buttonLabel: "Get Started",
  start: false,
  src: image2,
  alt: "Image-2",
};

export const homeObjFour = {
  lightBg: true,
  imgStart: true,
  primary: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Marketing Agency",
  heading: "Lead Generation Specialist for Online Business",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals",
  buttonLabel: "Get Started",
  start: true,
  src: image3,
  alt: "Image-3",
};

export const FooterLinks = [
  {
    id: 1,
    title: "About Us",
    links: [
      { title: "How it works" },
      { title: "Testimonials" },
      { title: "Careers" },
      { title: "Investors" },
      { title: "Terms of service" },
    ],
  },
  {
    id: 2,
    title: "Contact Us",
    links: [
      { title: "Contact" },
      { title: "Support" },
      { title: "Destination" },
      { title: "Sponsorships" },
    ],
  },
  {
    id: 3,
    title: "Videos",
    links: [
      { title: "Submit video" },
      { title: "Ambassadors" },
      { title: "Agency" },
      { title: "Influencer" },
    ],
  },
  {
    id: 4,
    title: "Social Media",
    links: [
      { title: "Instagram" },
      { title: "Facebbok" },
      { title: "Youtube" },
      { title: "Twitter" },
    ],
  },
];

export const pricingData = [
  {
    icon: <GiStoneBlock />,
    clubName: "Starter Pack",
    price: "$99.99",
    users: "100 New Users",
    budget: "$10000 Budget",
    support: "Targeted Analytics",
    ctaTitle: "Choose Plan",
  },
  {
    icon: <GiGoldBar />,
    clubName: "Gold Rush",
    price: "$299.99",
    users: "1000 New Users",
    budget: "$50000 Budget",
    support: "Lead Gen Analytics",
    ctaTitle: "Choose Plan",
  },
  {
    icon: <IoDiamond />,
    clubName: "Diamond Kings",
    price: "$999.99",
    users: "Unlimitet Users",
    budget: "Unlimitet Budget",
    support: "24/7 Support",
    ctaTitle: "Choose Plan",
  },
];
