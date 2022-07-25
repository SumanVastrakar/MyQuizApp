import express from "express";
const router = express.Router();

import { signup, signin, questions, addQuestion} from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/questions", questions);
router.post("/addquestion",addQuestion);


export default router;