import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/", routes);

app.listen(port, () => {
  console.log("Server running on the port: " + port);
});
