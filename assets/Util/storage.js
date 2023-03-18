const TODOS_STORAGE = "TODOS";

export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE)) || [];
  },
  set(todo) {
    localStorage.setItem(TODOS_STORAGE, JSON.stringify(todo));
  },
};
