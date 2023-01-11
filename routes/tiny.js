const express = require("express");
const {
  getBlogs,
  addBlog,
  deleteTiny,
  getSingleContent,
  tinyUpdate,
} = require("../controllers/tiny");

const router = express.Router();

router.get("/tiny/get-blogs", getBlogs);
router.post("/tiny/add-content", addBlog);
router.delete("/tiny/delete/:id", deleteTiny);
router.get("/tiny/get/:id", getSingleContent);
router.put("/tiny/update/:id", tinyUpdate);

module.exports = {
  routes: router,
};
