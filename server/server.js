import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;

const app = express();

app.use(bodyParser.json());