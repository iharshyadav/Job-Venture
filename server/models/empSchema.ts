import { Schema, model } from "mongoose"
import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"

interface IjobApplicantData{
    name: string,
    username: string,
    email: string,
    resume: string,
    coverLetter: string
    //aur honge
}

interface IjobPosted{
    jobTitle: string,
    jobDescription: string,
    jobQualifications: string,
    jobPayRange: string,
    jobApplicants: number,
    jobApplicantData: [IjobApplicantData]
}

interface IEmp {
    name: string,
    email: string,
    username: string,
    mobile:string,
    password: string,
    company: string,
    jobPosted: [IjobPosted]
    match: (password: string) => Promise<boolean>,
    generateAccessToken(): string,
    generateRefreshToken(): string
}


const EmpSchema = new Schema<IEmp>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        trim: true
    },
    password: { 
        type: String,
        required: true 
    }
}, { timestamps:true })

EmpSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await hash(this.password, 10)
    }
    next()
})

EmpSchema.methods.match = async function (password: string) {
    return compare(password, this.password)
}

EmpSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET_EMPLOYER,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY_EMPLOYER
        }
    )
}
EmpSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET_EMPLOYER,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY_EMPLOYER
        }
    )
}

export default model<IEmp>("Employer", EmpSchema)
