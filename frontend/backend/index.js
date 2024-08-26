const express = require('express')
const app = express()
const port = 8000

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,COntent-Type,Accept"
  );
  next();
})
const mongoDB = require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})   

app.use(express.json())

app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplacyData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//git init
//git add .
//git commit -m "hello5"
//git remote add origin https://github.com/Rizon1326/Kaggle_Practice.git
//git push --all