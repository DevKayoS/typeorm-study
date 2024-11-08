import { Request, Response } from "express";
import { User } from "../entity/User";

export class  UserController {
    static async register(req: Request, res: Response){
        const {name, email, password} = req.body

        //validacoes
        
        const user = new User()
        user.name = name
        user.email = email
        user.password = password
        await user.save()

        res.status(201).json({
            name
        })
        
    }

    static async teste(req: Request,res: Response){
        res.send({message: 'apliccao funcionando normal'})
    }
}