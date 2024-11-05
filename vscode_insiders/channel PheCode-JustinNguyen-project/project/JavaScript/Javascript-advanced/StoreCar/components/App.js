import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App({ cars }) {
  return html`
    <div>
      <input placeholder="Enter car..." />

      <button
        onclick="{
                const inputElement = document.querySelector('input')
                const data = inputElement.value
                if(data)
                    dispatch('ADD', data)
            }"
      >
        Add
      </button>
    </div>
    <h1>Danh sách ô tô</h1>
    <ul>
      ${cars.map(
        (car, index) =>
          `<li>${car} | 
                    <span
                        onclick="dispatch('DELETE', ${index})"
                    >Xóa</span>
                </li>`
      )}
    </ul>
  `;
}

export default connector(App);
