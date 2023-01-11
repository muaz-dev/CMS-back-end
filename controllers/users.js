const { response } = require("express");
const firebase = require("../db");
const firestore = firebase.firestore();

const getUserWithParams = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(req.params);
    const q = await firestore.collection("users");

    const data = await q.get();
    const dataArray = [];

    data.forEach((doc) => {
      const newData = {
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        password: doc.data().password,
      };

      dataArray.push(newData);
      // console.log(dataArray);
    });
    console.log(dataArray.find((item) => item.email === { id }));
    // console.log(dataArray.email);
    if (!data.exists) {
      res.status(404).send("the item not found with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const query = await firestore.collection("users");
    //   .where("email", "==", "tito@gmail.com");

    //   .where("email", "==", { id });

    const data = await query.get();
    const dataArray = [];

    data.forEach((doc) => {
      const newData = {
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        password: doc.data().password,
      };

      dataArray.push(newData);
      // console.log(dataArray);
    });
    console.log(dataArray.find((item) => item.email === { id }));
    // console.log(dataArray.email);
    if (!data.exists) {
      res.status(404).send("the item not found with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const querys = await firestore.collection("users");
    const data = await querys.get();
    const dataArray = [];
    if (data.empty) {
      res.status(404).send("No student record found");
    } else {
      data.forEach((doc) => {
        const newData = {
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          password: doc.data().password,
        };

        dataArray.push(newData);
        // console.log(dataArray);
      });
      res.send(dataArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUser,
  getUsers,
  getUserWithParams,
};
