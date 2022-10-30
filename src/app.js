import express from "express";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { Server as HTTPServer } from 'http';
import path from 'path';
import { Server as websocketServer } from "socket.io";
import { router } from "./routes";
import sockets from "./sockets";


import MongoStore from 'connect-mongo';
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }






const PORT = process.env.PORT || 8080;
const app = express();
app.use(session({

    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://DeRep:nose1234@cluster0.dc3f8gz.mongodb.net/test',
        mongoOptions: advancedOptions
    }),


    secret: 'RandomCode',
    resave: false,
    saveUninitialized: false ,
    cookie: {
        maxAge: 40000
    } 
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.set('port', PORT);
app.use(router);
const http = new HTTPServer(app);
const io = new websocketServer(http);

sockets(io);

export {
    app,
    http
};
