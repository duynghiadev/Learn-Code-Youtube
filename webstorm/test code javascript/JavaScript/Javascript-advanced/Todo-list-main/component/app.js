import html from "../library/core.js";
import { connect } from "../library/store.js";
import header from "./header.js";
import todoList from "./todoList.js";
import footer from "./footer.js";

function app({ todos }) {
  return html`
    <section class="todoapp">
      ${header()} ${todos.length > 0 && todoList()}
      ${todos.length > 0 && footer()}
    </section>
  `;
}

export default connect()(app);
