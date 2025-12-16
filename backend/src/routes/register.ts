import { Router } from "express";
import { register } from "../controllers/registerController";
import { upload } from "../middleware/upload";

const router = Router();

router.post("/register", upload.single("paymentScreenshot"), register);

export default router;

