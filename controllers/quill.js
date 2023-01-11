const { response } = require("express");
const firebase = require("../db");
const firestore = firebase.firestore();

const getContents = async (req, res, next) => {
  try {
    const query = await firestore.collection("quill");
    const data = await query.get();
    const dataArray = [];
    if (data.empty) {
      res.status(404).send("No record found");
    } else {
      data.forEach((doc) => {
        const newData = {
          id: doc.id,
          content: doc.data().content,
          createBy: doc.data().createBy,
          createdAt: doc.data().createdAt,
          creatorEmail: doc.data().creatorEmail,
        };

        dataArray.push(newData);
      });
      res.send(dataArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addBlog = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("quill").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTiny = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("quill").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSingleContent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = await firestore.collection("quill").doc(id);
    const data = await query.get();
    if (!data.exists) {
      res.status(404).send("the item not found with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const tinyUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const query = await firestore.collection("quill").doc(id);
    await query.update(data);
    res.send("data record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getContents,
  addBlog,
  deleteTiny,
  getSingleContent,
  tinyUpdate,
};
