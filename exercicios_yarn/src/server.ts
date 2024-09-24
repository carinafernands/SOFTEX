import "reflect-metadata"
import express from "express";

import { AppDataSource  } from "./database/data-source";
const app = express()

AppDataSource.initialize().then(async () =>{
    console.log("Banco de dados conectado")

    app.listen(3333,() => {console.log("Servidor funcionando!")});
})