import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

dayjs.locale({
  name: 'vi',
  relativeTime: {
    future: '%s',
    past: '%s',
    s: 'vài giây',
    m: '1 phút',
    mm: '%d phút',
    h: '1 giờ',
    hh: '%d giờ',
    d: '1 ngày',
    dd: '%d ngày',
    M: '1 tháng',
    MM: '%d tháng',
    y: '1 năm',
    yy: '%d năm',
  },
});

export const calculateDate = createdAt => {
  const formattedDate = dayjs(createdAt).fromNow();

  return formattedDate;
};
