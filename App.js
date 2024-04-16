// const express = require("express");
import express from "express";
import session from "express-session";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import SecurityController from "./SecurityController.js";
import UserRoutes from "./Users/routes.js";
import mongoose from "mongoose";
import "dotenv/config";

// mongoose.connect("mongodb://localhost:27017/kanbas");
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// const sessionOptions = {
//   secret: "any string",
//   resave: false,
//   saveUninitialized: false,
// };
// app.use(
//   session(sessionOptions)
// );

const app = express();
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL

    })
);
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
  })
);


const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));


Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
SecurityController(app);
UserRoutes(app);

app.use(express.json());//
app.use(cors());//
// const port = process.env.PORT || 4000;

app.listen(4000);