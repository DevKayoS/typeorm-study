import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router: Router = Router()

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.get('/getAll', UserController.getAllUser)
router.get('/', UserController.teste)

export default router