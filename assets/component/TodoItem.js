import html from "../js/core.js";

function TodoItem({ todo, index, editingIndex }) {
  return html` <li
    class="${todo.completed && "completed"}
    ${editingIndex === index && "editing"}"
  >
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        onclick="dispatch('toggle', ${index})"
        ${todo.completed && "checked"}
      />
      <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
      <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
    </div>
    <input
      class="edit"
      value="${todo.title}"
      onkeyup="event.keyCode === 13 && dispatch('editing', this.value.trim()) || 
      event.keyCode === 27 && dispatch('cancelEdit')"
      onblur="dispatch('editing', this.value.trim())"
    />
  </li>`;
}
export default TodoItem;
