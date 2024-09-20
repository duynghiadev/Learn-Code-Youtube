const API = axios.create({
  baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
});

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');