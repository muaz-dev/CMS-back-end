const express = require("express");
const {
  getContents,
  addBlog,
  deleteTiny,
  getSingleContent,
  tinyUpdate,
} = require("../controllers/quill");

const router = express.Router();

router.get("/quill/get-contents", getContents);
router.post("/quill/add-content", addBlog);
router.delete("/quill/delete/:id", deleteTiny);
router.get("/quill/get/:id", getSingleContent);
router.put("/quill/update/:id", tinyUpdate);

module.exports = {
  routes: router,
};
