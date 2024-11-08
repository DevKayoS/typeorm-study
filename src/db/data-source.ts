import { DataSource } from "typeorm";
import { User } from "../entity/User";
import "reflect-metadata";


export const Connection = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "YourStrong!Passw0rd",
    database: "master",
    logging: true,
    entities: [User],
    synchronize: true, 
    options:{ encrypt: false, useUTC: true} ,
    migrations: [],
})

export const initializeDatabase = Connection.initialize()
    .then(()=> {
        console.info(">>> Banco Conectado")
    }).catch((error: any)=> {
        console.log(error)
        throw new Error('Nao foi possivel conectar com o Banco de Dados')
    })