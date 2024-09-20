import dayjs from 'dayjs';

const minutesToHours = (minutes, format) => {
  let timeString;
  if (minutes >= 3600) {
    timeString = dayjs()
      .startOf('day')
      .add(minutes, 'second')
      .format(format || 'HH:mm:ss');
  } else {
    timeString = dayjs()
      .startOf('day')
      .add(minutes, 'second')
      .format(format || 'mm:ss');
  }

  return timeString;
};

export { minutesToHours };
