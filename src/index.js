import express from "express";
import bodyParser from "body-parser";
import logger from "./functions/_logger.js";
import usersRoutes from "./routes/users.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 3000;
const HOSTNAME = "localhost";

// MiddleWare
app.use(bodyParser.json());
app.use(logger);
app.use(usersRoutes);

app.get("/", (req, res) => {
  res.redirect("/users");
});

// Listen
app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
