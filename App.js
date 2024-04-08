import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";

// const express = require('express')
const app = express()
app.use(cors());
app.use(express.json());

Hello(app)
Lab5(app);
CourseRoutes(app);

app.listen(4000)