import html from "../library/core.js";
import { connect } from "../library/store.js";
import todoItem from "./todoItem.js";

function todoList({ todos, filter, filters }) {
  return html`
    <section class="main">
      <h1 class="main-title">Danh sách công việc</h1>
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll',this.checked)"
        ${todos.every(filters.completed) && "checked"}
      />
      <label for="toggle-all">Đánh dấu tất cả đã hoàn thành</label>
      <ul class="todo-list">
        ${todos
          .filter(filters[filter])
          .map((todo, index) => todoItem({ todo, index }))}
      </ul>
    </section>
  `;
}

export default connect()(todoList);
