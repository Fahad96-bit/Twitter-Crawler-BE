import App from "./src/app";
const CONFIG = require("./config/config");
import TwitterController from "./src/controllers/Twitter";

const port = CONFIG.port || 5000;
const app = new App([new TwitterController()], port);

app.listen();
