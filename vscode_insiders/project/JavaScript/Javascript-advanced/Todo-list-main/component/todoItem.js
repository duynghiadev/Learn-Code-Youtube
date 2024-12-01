import html from "../library/core.js";
import { connect } from "../library/store.js";

function todoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />

        <label ondblclick="dispatch('startEdit', ${index})">
          ${todo.title}</label
        >

        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
        <p class="createAt">
          <svg
            style="width: 15px; margin-right: 5px"
            xmlns="http://www.w3.org/2000/svg"
            class="h-1 w-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          ngày tạo: ${todo.createAt}
        </p>
      </div>

      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
        onblur="dispatch('endEdit', this.value.trim())"
      />
    </li>
  `;
}

export default connect()(todoItem);
