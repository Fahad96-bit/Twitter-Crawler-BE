import { Router, Request, Response } from "express";
import axios from "../middleware";
import { response } from "../helpers/models";

class TweetController {
  public path: string = "/api/twitter";
  public router: Router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes = () => {
    this.router.get(`${this.path}/search`, this.getUserTweetData);
  };

  getUserTweetData = async (req: Request, res: Response) => {
    try {
      const resp = await axios.get(
        `/tweets/search/recent?query=${req.query.name}`
      );
      res.status(200).json({
        message: "tweets fetched successfully",
        result: resp.data,
      });
    } catch (e) {
      const result = new response(500).setMsg("Server error");
      return res.status(result.status).json(result.getBody());
    }
  };
}

export default TweetController;
