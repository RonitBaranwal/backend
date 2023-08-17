const express = require("express");
const app = express();
const mongodb=require('mongodb')
const dbConnect = require('./config/db');
app.use(express.urlencoded());
app.use(express.json());
const dbase = 'Notable';
const mongoUrl = "mongodb://localhost:27017/";

app.listen("4000", () => {
    console.log(`Running in port 4000`);
});

app.post('/',async (req, res) => {
    let data = await dbConnect();
  const datas = req.body;

  const result = await data.insertOne(datas)
  // console.log(result.acknowledgement);
  res.send(result);
})
app.put('/', async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: 'Rohan' },
    {
      $set: {
        name: 'Ronit',
      }
    }
    )
    res.send('done');
})
app.delete('/:id', async(req, res) => {
    let data = await dbConnect();
    // console.log(data);
  const value = req.params.id;
    const result = await data.deleteOne({
        _id: new mongodb.ObjectId(value),
    })
    // console.log(result.acknowledged);
    res.send(result.acknowledged)
})
app.get('/',async (req, res) => {
  const data = await dbConnect();
  const value = await data.find().toArray();
  res.send(value);
})