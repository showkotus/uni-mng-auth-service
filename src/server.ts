// const mongoose = require('mongoose');
import mongoose from "mongoose";
import app from "./app"
import config from "./config/index"


async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database Connected Succesfully");
        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log("Databse connection failed..")
    }

}

bootstrap()