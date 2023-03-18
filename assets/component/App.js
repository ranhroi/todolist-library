import html from "../js/core.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import { connect } from "../js/store.js";

function App(state) {
  return html`
   <section class="todoapp">
    ${Header()}
    ${state.todos.length > 0 && TodoList(state)}
    ${state.todos.length > 0 && Footer(state)}
  </section>`;
}
export default connect()(App);
