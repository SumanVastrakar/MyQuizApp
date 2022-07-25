import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js"
import Questions from "../models/questions.js"

const secret = "test";

export const signin = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const oldUser = await UserModel.findOne({email});
        if(!oldUser) return res.status(404).json({message : "User doesn't exist"});
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message : "Invalid credentials"});

        const token = jwt.sign({email : oldUser.email, id : oldUser._id}, secret, {expiresIn : "1hr"});
        res.status(200).json({result : oldUser, token})
    }catch(err){
        res.status(500).json({message : "Something went wrong"})
        console.log(err)
    }
}
 
export const signup = async(req, res) =>{
    const{email, password, firstName, lastName} = req.body;
    try{
       const oldUser = await UserModel.findOne({email});
       if(oldUser) {
        return res.status(400).json({message : "User already Exists"})
       }
       const hashedPassword = await bcrypt.hash(password, 12);
       const result = await UserModel.create({
        email,
        password : hashedPassword,
        name : `${firstName} ${lastName}`
       })
       const token = jwt.sign({email : result.email, id : result._id}, secret, {expiresIn : "1h"});
       res.status(201).json({result, token})
    }catch(err){
 res.status(500).json({message : "Something went wrong"})
 console.log(err)
    }
}


export const questions = async (req, res) =>{
    try{
       const question = await Questions.find().lean().exec();
       return res.status(201).send({quiz : question})
    }catch(err){
        return res.status(500).send({message : err})
    }
}
export const addQuestion = async (req, res) =>{
    try{
       const question = await Questions.create(req.body);
       return res.status(201).send(question)
    }catch(err){
        return res.status(500).send({message : err.message})
    }
}
