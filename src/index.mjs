import env from "dotenv";
import express from "express";
import { monthData } from "./mocks/data.mjs";

env.config();

console.log(env.config());

const app = express();

let port = 4000

app.get('/', async (req, res) => {    
  res.json(JSON.stringify(monthData));
});

app.get('/account', async (req, res) => {    
    
    const body = req.body;

    if (body.email === "aaa@aa.com") {
        res.json(JSON.stringify({
            accountId: 3
        }));
    } else if (body.email === "bbb@bb.com") {
            res.json(JSON.stringify({
                accountId: 4
            }));
        }    
     else {
        res.json(JSON.stringify({
            accountId: 5
        }));
    }
    
    
  });
  
const start = (port) => {
    app.listen(port, () => {
        console.log(`API listening on port ${port}`)
      }).on('error', () => {
        port = port + 1;
        start(port);
      });
};

start(port);