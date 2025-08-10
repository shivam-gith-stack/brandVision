const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const bodyparser = require("body-parser");
const dbconnection = require("./database");

app.use(cors({
    origin: ['http://localhost:5173'], 
    credentials: true
}));

app.use(express.json());
app.use(bodyparser.json()); 

const users = require('./router');
app.use('/api/v1', users);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    dbconnection();
    console.log("database connection success");
});
