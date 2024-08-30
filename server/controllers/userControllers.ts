import { Response } from "express"
import {Requests} from "../utils/def"
import axios from 'axios'
import UserSchema from '../models/userSchema'


// const genTokens = async(userId:string) =>{
//     try {
//         const user = await UserSchema.findById(userId)
//         const accessToken = user.generateAccessToken()
//         const refreshToken = user.generateRefreshToken()

//         user.refreshToken = refreshToken
//         await user.save({ validateBeforeSave: false })

//         return {accessToken, refreshToken}

//     } catch (error) {
//         return false
//     }
// }

const login = async (req: Requests, res: Response) => {
    try {
        return res.status(200).json({ msg: 'init' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Error occured while fetching data' })
    }
}

const all_exports = {
    login
}

export default all_exports

