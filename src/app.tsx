import { render } from "react-dom";
import { Feed } from "./Feed";

import "./styles/reset.css";
import "./styles/app.css";

const app = document.getElementById("app");

render(<Feed />, app);
