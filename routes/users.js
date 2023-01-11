const express = require("express");
const {
  getUser,
  getUsers,
  getUserWithParams,
} = require("../controllers/users");

const router = express.Router();

router.get("/get-user/:id", getUser);
router.get("/get-user", getUserWithParams);
router.get("/get-users", getUsers);

module.exports = {
  routes: router,
};
