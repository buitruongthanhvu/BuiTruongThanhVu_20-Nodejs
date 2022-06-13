"use strict";
const express = require("express");
const theaterRouter = require("./theaters/index");
const movieRouter = require("./movie/index");
const userRouter = require("./user/index");
const ticketRouter = require("./ticket/index")
const showTimeRouter = require("./showtime/index")

// const userRouter = require("./user");

const rootRouter = express.Router();

rootRouter.use("/movie", movieRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/theater", theaterRouter);
rootRouter.use("/ticket", ticketRouter);
rootRouter.use("/showtime", showTimeRouter);
// rootRouter.use("/user", userRouter);

module.exports = rootRouter;
