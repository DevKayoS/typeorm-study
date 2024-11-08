import express from 'express'
import routerUser from './routes/user'
import "reflect-metadata";
import { initializeDatabase } from './db/data-source';

const port = 3333

export class  App {
    public server: express.Application

    constructor(){
        this.server = express();
        this.middleware();
        this.router();
    }

    public async start(){
        try {
            await initializeDatabase;
            this.server.listen(port, ()=> {
                console.log('servidor rodando na porta:', port)
            })
        }
        catch(error){
            console.log(error)
            process.exit(1);
        }
    }

    private middleware(){
        this.server.use(express.json())
    }

    private router() {
        this.server.use('/user', routerUser)
    }

}