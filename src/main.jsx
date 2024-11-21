import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { Provider } from "react-redux";
import { myStore } from "./redux/store.js";
createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
