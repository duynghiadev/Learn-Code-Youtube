// const API = axios.create({
//   baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
// });

const API = {
  call: function () {
    return axios.create({
      baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
    });
  },
  callWithToken: function (token) {
    if (!token) token = localStorage.getItem('ACCESS_TOKEN');

    return axios.create({
      baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const token = localStorage.getItem(ACCESS_TOKEN);
let RECENT_POSTS = JSON.parse(localStorage.getItem('RECENT_POSTS')) || [];
let recentPostsIdString = RECENT_POSTS.toString();
const recentPosts = document.getElementById('recentPosts');
const elInputSearch = document.getElementById('inputSearch');

elInputSearch.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    const keyword = elInputSearch.value.trim();

    if (keyword) {
      window.location.href = `search.html?keyword=${keyword}`;
    } else {
      alert('Vui lòng nhập từ khóa cần tìm');
      elInputSearch.value = '';
    }
  }
});

API.call().get(`articles?limit=4&ids=${recentPostsIdString}`).then((res) => {
  const articles = res.data.data;

  let html = '';
  articles.forEach((item) => {
    html += /* html */ `
    <li>
      <a href="detail.html?id=${item.id}" class="d-flex align-items-center">
        <img src="${item.thumb}" alt="${item.title}" class="img-fluid me-3" />
        <div>
          <div class="post-meta d-block">
            <span class="date">${item.category.name}</span> 
            <span class="mx-1">&bullet;</span> 
            <span>${dayjs(item.publish_date).fromNow()}</span>
          </div>
          <span>${item.title}</span>
        </div>
      </a>
    </li>`;
  });
  recentPosts.innerHTML = html;
});

function showFormErrorsMessage(errors, el) {
  let errString = '';

  for (const property in errors) {
    errString += /* html */ `<li>${errors[property]}</li>`;
  }

  el.innerHTML = /* html */ `
  <div class="alert alert-danger" role="alert">
    <ul>${errString}</ul>
  </div>`;
}
