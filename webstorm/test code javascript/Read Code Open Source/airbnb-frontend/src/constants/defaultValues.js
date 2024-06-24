import { addDays } from "date-fns";
export const NO_IMAGE_AVAILABLE = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`;
export const DEFAULT_NO_AVATAR = "https://a0.muscache.com/defaults/user_pic-50x50.png";
export const COUNTRY_FORMAT = "vi-VN";
export const DEFAULT_CHOSEN_PLACE = "Địa điểm bất kỳ";
export const DEFAULT_PLACE = "";
export const DEFAULT_PEOPLE_COUNT = 1;
export const DEFAULT_DATE_RANGE = [
  {
    startDate: addDays(new Date(), 1),
    endDate: addDays(new Date(), 8),
    key: "selection",
  },
];
