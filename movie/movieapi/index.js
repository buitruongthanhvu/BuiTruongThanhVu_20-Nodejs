'use strict'
const express = require('express')
const cors = require('cors')
const mysql = require('mysql');
const { sequelize } = require('./src/models');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")
const rootRouter = require('./src/routers/index');
const res = require('express/lib/response');

const port = 3000

// extend: https://swagger.io/specification/
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Custom API",
            description: "Custom API",
            contact: {
                name: "API"
            },
            servers: ["http://localhost:3000"]
        }
    },
    //["./routers/*.js"]
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const app = express()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /api/movie/QuanLyPhim/LayDanhSachPhim:
 *  get:
 *      descripstions: Use to get movie
 *      parameters:
 *      - in: body
 *        name: tenPhim
 *        description: Default value
 *      responses:
 *          "200":
 *              description: a successful request
 *          "400": 
 *              description: Error to get Movie
 */         
/**
 * @swagger
 * /api/movie/QuanLyPhim/LayDanhSachPhim/create:
 *  post:
 *      description: Use to create movie 
 *  
 *      responses:
 *          "200":
 *              description: a successful request
 *          "400":
 *              description: Movie error
 *          "500":
 */
/**
 * @definitions
 *  Order:
 *      type: "string"
 *      properties:
 *          id:
 * 
 */


app.use(express.json());

app.get("/a", (req, res) => {
    res.send("ok")
})

sequelize.sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });


app.use("/api", rootRouter)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
