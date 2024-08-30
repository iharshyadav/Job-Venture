import { Router } from "express";
import ctrl from '../controllers/userControllers'
const app: Router = Router();


app.get('/login',ctrl.login)

export default app