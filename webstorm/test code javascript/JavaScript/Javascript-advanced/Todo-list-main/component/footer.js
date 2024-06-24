import html from "../library/core.js";
import { connect } from "../library/store.js";

function footer({ todos, filter, filters }) {
  const tasks = ["Tất cả", "Chưa làm", "Hoàn thành"];

  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${todos.filter(filters.active).length}</strong> work
      </span>
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
                            <li>
                                <a class="${
                                  filter === type && "selected"
                                }" href="#" onclick = dispatch('switchFilter','${type}')>
                                    ${type[0].toUpperCase() + type.slice(1)}
                                </a>
                            </li>
                        `
        )}
      </ul>
      ${todos.filter(filters.completed).length > 0 &&
      html`<button class="clear-completed" onclick="dispatch('clearCompleted')">
        Clear
      </button>`}
    </footer>
  `;
}

export default connect()(footer);
