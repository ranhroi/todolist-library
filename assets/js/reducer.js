import storage from "../Util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editingIndex: null,
};

const actions = {
  add(state, title) {
    if (title) {
      state.todos.push({ title, completed: false });
      storage.set(state.todos);
    }
  },
  toggle({ todos }, index) {
    todos[index].completed = !todos[index].completed;
    storage.set(todos);
  },
  toggleAll({ todos }, completed) {
    todos.forEach((todo) => (todo.completed = completed));
    storage.set(todos);
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  switchFilter(state, type) {
    state = state.filter = type;
  },
  startEdit(state, index) {
    state.editingIndex = index;
  },
  editing(state, value) {
    if (state.editingIndex !== null) {
      if (value) {
        state.todos[state.editingIndex].title = value;
        storage.set(state.todos);
      } else {
        this.destroy(state, state.editingIndex);
      }
      state.editingIndex = null;
    }
  },
  endEdit(state) {
    state.editingIndex = null;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
