import express from "express";

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/country", (req,res) =>{
  let countries = {
    "country": "Afghanistan",
    "year": 1969,
    "ratio": 15.4
  };
  let result = JSON.stringify(countries);
  return res.send(result);
});

export default app;
