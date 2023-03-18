import html from "../js/core.js";
import TodoItem from "./TodoItem.js";

function TodoList({ todos, filters, filter, editingIndex }) {
  return html`<section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      onchange="dispatch('toggleAll', this.checked)"
      ${todos.every(filters.completed) && "checked"}
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      ${todos
        .filter(filters[filter])
        .map((todo, index) => TodoItem({ todo, index, editingIndex }))}
    </ul>
  </section>`;
}
export default TodoList;
