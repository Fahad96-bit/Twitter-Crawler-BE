import bodyParser from "body-parser";
import express, { Application } from "express";
import http from "http";
import IController from "./interfaces/Controller";

class App {
  public app: Application;
  public port: any;
  constructor(controllers: IController[], port: any) {
    this.app = express();
    this.port = port;
    // this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    // this.registerPartials();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    // this.app.use(cors());
    // this.app.use(passport.initialize());

    this.app.use(bodyParser.urlencoded({ extended: false }));
    // this.app.use(cookie());
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    const server = http.createServer(this.app);
    server.listen(this.port, () =>
      console.log(`Server started on port ${this.port}`)
    );
  }
}

export default App;
