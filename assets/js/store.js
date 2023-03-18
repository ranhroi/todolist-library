import reducer from "./reducer.js";
import { createStore } from "./core.js";
import showLogger from "./logger.js"


const { attach, connect, dispatch } = createStore(showLogger(reducer));

window.dispatch = dispatch;

export { attach, connect };
