const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoutes");
const dotenv = require("dotenv");
const cors =require("cors")
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
mongoose
  .connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connnected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(routes);
app.listen(process.env.PORT, () => {
  console.log(`listinig on ${process.env.PORT}`);
});
