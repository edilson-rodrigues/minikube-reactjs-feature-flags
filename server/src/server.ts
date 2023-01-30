import { Router, Request, Response } from "express";
import express = require("express");
import db = require("./database");
import bodyParser = require("body-parser");

const HTTP_PORT = 8000;

const app = express();

const route = Router();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route.get("/", (req: Request, res: Response, next) => {
  res.json({ message: "status ok" });
});

route.get("/flags", (req: Request, res: Response, next) => {
  const sql = "select * from feature_toggle";
  const params: [] = [];

  db.all(sql, params, (err: Error | null, rows: any) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.patch("/flag/:id", (req: Request, res: Response, next) => {
  if (!req.body.flag) {
    res.status(400).json({ error: "flag is required" });
    return;
  }

  const data = {
    id: req.params.id,
    flag: req.body.flag,
  };

  const sql = "UPDATE feature_toggle SET flag = ? WHERE id = ?";

  db.run(sql, [data.flag, data.id], (err: Error | null) => {
    if (err) {
      console.error(err);
      res.status(400).json({ error: "error update flag" });
      return;
    }
    res.json({
      message: "success",
      data: data,
    });
  });
});

app.use(route);

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

app.use(function (req: Request, res: Response) {
  res.status(404);
});
