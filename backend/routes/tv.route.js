import express from "express";
import {
  getSimilarTvs,
  getTVDetails,
  getTendingTv,
  getTvTrailers,
  getTvsByCategory,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTVDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;
