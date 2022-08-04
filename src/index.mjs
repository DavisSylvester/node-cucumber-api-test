import express from "express";
import { monthData } from "./mocks/data.mjs";


const app = express();

const port = 4000

app.get('/', async (req, res) => {    
  res.json(JSON.stringify(monthData));
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})