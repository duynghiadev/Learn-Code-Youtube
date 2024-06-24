import html from "../library/core.js";

// Khai báo đối tượng Date
var date = new Date();

// Lấy số thứ tự của ngày hiện tại
var current_day = date.getDay();
var current_date = date.getDate();
var current_month = date.getMonth() + 1;
var current_year = date.getFullYear();

// Biến lưu tên của thứ
var day_name = "";

// Lấy tên thứ của ngày hiện tại
switch (current_day) {
  case 0:
    day_name = "Chủ nhật";
    break;
  case 1:
    day_name = "Thứ hai";
    break;
  case 2:
    day_name = "Thứ ba";
    break;
  case 3:
    day_name = "Thứ tư";
    break;
  case 4:
    day_name = "Thứ năm";
    break;
  case 5:
    day_name = "Thứ sau";
    break;
  case 6:
    day_name = "Thứ bảy";
}

function header() {
  return html`
    <div class="title">
      <img src="https://avatars.githubusercontent.com/u/87141231?v=4" />
      <h1>To Do List</h1>
    </div>
    <header class="header">
      <div class="header__date">
        <span class="currentDay"> ${day_name},</span>
        <span class="currentDate"
          >ngày ${current_date} tháng ${current_month} năm ${current_year}
        </span>
      </div>
      <div class="header__input">
        <span class="header__icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </span>
        <input
          class="new-todo"
          placeholder="Thêm mới nội dung..."
          autofocus
          onkeyup="event.keyCode === 13 && dispatch('add',this.value.trim())"
        />
        <button
          class="button-add"
          onclick="dispatch('add',document.querySelector('.new-todo').value.trim())"
        >
          Thêm mới
        </button>
      </div>
    </header>
  `;
}

export default header;
