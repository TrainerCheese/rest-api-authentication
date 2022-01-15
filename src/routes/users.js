import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const userData = [];

router.get("/users", (req, res) => {
  res.send(userData);
});

router.post("/users", (req, res) => {
  const postData = req.body;

  res.send(
    `User with the name ${postData.firstName} has been added to the database`
  );

  // Push
  userData.push({ ...postData, id: uuidv4() });
  const userwithID = { ...postData, id: uuidv4() };

  console.log(userwithID);
});

router.get("/users/:id", (req, res) => {
  console.log(req.params);

  const { id } = req.params;

  const foundUser = userData.find((postData) => postData.id === id);

  res.send(foundUser);
});

export default router;
