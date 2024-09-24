//importação do Reflect MetaData

import "reflect-metadata";

//importação do DataSource
import { DataSource } from "typeorm";

//criação de um objeto DataSource

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "Agenda",
    synchronize: true,
    logging: false,
    entities: [],
})