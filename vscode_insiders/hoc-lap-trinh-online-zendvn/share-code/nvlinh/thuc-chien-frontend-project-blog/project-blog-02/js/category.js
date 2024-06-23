const elArticles = document.getElementById('articles');
const elCategoryTitle = document.getElementById('categoryTitle');
const elBtnLoadMore = document.getElementById('btnLoadMore');
const elMyPagination = document.getElementById('myPagination');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
let currentPage = parseInt(urlParams.get('page'));
if (isNaN(currentPage)) currentPage = 1;

// if (isNaN(id)) window.location.href = 'index.html';

getArticles(currentPage);

// elBtnLoadMore.addEventListener('click', function () {
//   currentPage++;
//   elBtnLoadMore.innerText = 'Đang tải thêm...';
//   elBtnLoadMore.disabled = true;
//   getArticles(currentPage);
// });

// Event Delegate
elMyPagination.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('page-item')) {
    currentPage = parseInt(el.innerText);
    getArticles(currentPage);
    addOrUpdateUrlParameter('page', currentPage);
  }

  if (el.classList.contains('page-item-prev')) {
    currentPage--;
    getArticles(currentPage);
    addOrUpdateUrlParameter('page', currentPage);
  }

  if (el.classList.contains('page-item-next')) {
    currentPage++;
    getArticles(currentPage);
    addOrUpdateUrlParameter('page', currentPage);
  }
});

function addOrUpdateUrlParameter(key, value) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  urlParams.set(key, value);
  const newUrl = window.location.pathname + '?' + urlParams.toString();
  history.pushState(null, '', newUrl);
}

function getArticles(page = 1) {
  API.get(`categories_news/${id}/articles?limit=5&page=${page}`)
    .then((res) => {
      const articles = res.data.data;
      let categoryName = '';
      const totalPages = res.data.meta.last_page;

      let html = '';
      articles.forEach((item) => {
        const title = item.title;
        const thumb = item.thumb;
        const publishDate = dayjs(item.publish_date).fromNow();
        const description = item.description;
        const authorName = item.author;
        categoryName = item.category.name;

        html += /* html */ `
      <div class="d-md-flex post-entry-2 half">
        <a href="single-post.html" class="me-4 thumbnail">
          <img src="${thumb}" alt="${title}" class="img-fluid" />
        </a>
        <div>
          <div class="post-meta"><span>${publishDate}</span></div>
          <h3><a href="single-post.html">${title}</a></h3>
          <p>${description}</p>
          <div class="d-flex align-items-center author">
            <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
            <div class="name">
              <h3 class="m-0 p-0">${authorName}</h3>
            </div>
          </div>
        </div>
      </div>`;
      });

      elCategoryTitle.innerText = `Category: ${categoryName}`;
      elArticles.innerHTML = html;
      renderPagination(totalPages);

      // elArticles.innerHTML += html;
      // elBtnLoadMore.innerText = 'Xem thêm';
      // elBtnLoadMore.disabled = false;
    })
    .catch(function (error) {
      window.location.href = 'index.html';
    });
}

function renderPagination(total) {
  const disabledPrev = currentPage === 1 ? 'pointer-events-none' : '';

  let html = `<a href="#" class="prev page-item-prev ${disabledPrev}">Prevous</a>`;
  for (let index = 1; index <= total; index++) {
    const active = index === currentPage ? 'active pointer-events-none' : '';
    html += `<a href="#" class="page-item ${active}">${index}</a>`;
  }

  const disabledNext = currentPage === total ? 'pointer-events-none' : '';
  html += `<a href="#" class="next page-item-next ${disabledNext}">Next</a>`;
  elMyPagination.innerHTML = html;
}
