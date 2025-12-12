const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courses");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/courses", courseRoutes);

app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on http://127.0.0.1:8000");
});
