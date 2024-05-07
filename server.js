const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { bgCyan } = require("colors");
require("colors");

const connectDb = require("./config/config");
//dotenv config
if(process.env.NODE_ENV!=="PRODUCTION"){
  require("dotenv").config();
}

//db config
connectDb();
//rest object
const app = express();

//middlwares
app.use(
  cors({
    origin: "https://pos-client-31hv.vercel.app/",
    origin:true,
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoutes"));
app.get("/",(req,res)=>{
  res.send("<h1>POS BACKEND </h1>");
});


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});
