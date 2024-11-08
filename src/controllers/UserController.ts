import { Request, Response } from "express";
import { User } from "../entity/User";
import { UserRepository } from "../repository/user.repository";

export class  UserController {
    static async register(req: Request, res: Response){

        try {
        const {name, email, password} = req.body

        //TODO - validacoes

        // procurando usuario no banco de dados
        const userVerification = await UserRepository.findOne({where: {email}})

        if(userVerification){
            res.status(400).json({
                message: 'email ja cadastrado'
            })
        }  


        const user = new User()
        user.name = name
        user.email = email
        user.password = password
        
        await UserRepository.save(user)

        res.status(201).json({
            name
        }) 
        }
        catch(error){
            console.log(error)
        }
    }

    static async login(req: Request, res: Response){
        try {
        const {email, password} = req.body

        //TODO - validacoes

        // procurando usuario no banco de dados
        const user = await UserRepository.findOne({where: {email}})

        if(!user){
            res.status(400).json({
                message: 'email e/ou senha invalidos'
            })
        }

        if(password != user?.password){
            res.status(400).json({
                message: 'email e/ou senha invalidos'
            })
        }

        res.status(200).json({
            name: user?.name
        })
        
        }catch (error){
            console.log(error)
        }

    }

    static async getAllUser(req: Request, res: Response ){
        const users = await UserRepository.find()

        res.status(200).json({users})

    }

    static async teste(req: Request,res: Response){
        res.send({message: 'aplicacao funcionando normal'})
    }
}