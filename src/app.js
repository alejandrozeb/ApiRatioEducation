import express from "express";

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/country", (req,res) =>{
    res.json([]);
});

export default app;
