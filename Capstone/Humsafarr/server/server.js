const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const User= require('./db/models/userSchema')
const dotenv = require("dotenv")
const app = express();

app.use(require('./router/auth'));

const middleware = (req,res,next)=>{
  console.log("Hello from middleware");
  next();
}

app.get('/',(req,res)=>{
  res.send('hello world from the server')
})

//----------------------Database Connection ---------------------------//
dotenv.config({ path: './config.env'});
const DB = process.env.DATABASE;
mongoose.connect(DB,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useUnifiedTopology:true,
  // useFindAndModify:false,

}).then(()=>{
  console.log(`connection success`);
}).catch((err)=>console.log("no connection"));





app.listen(8000, () => {

  console.log("Server listening on port 8000");
});
