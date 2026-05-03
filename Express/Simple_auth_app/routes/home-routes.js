import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/home", authMiddleware, (req, res) => {

    let {user} = req.userInfo;

  res.status(200).json({
    success: true,
    message: "welcome to home page",
    user:user,
  });
});

export default router;
