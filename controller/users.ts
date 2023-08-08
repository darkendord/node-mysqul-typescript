import { Request, Response } from "express";
import User from "../models/user";
import { json } from "sequelize";


export const getUsers = async (req: Request, res:Response)=>{

    const users = await User.findAll();
    res.json(users);
};


export const getUser = async (req: Request, res:Response)=>{

    const{id} = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json(user);
    }else{
        res.status(404).json({
            msg: `User id ${id} does not exist`
        })
    }
};


export const postUser = async (req: Request, res:Response)=>{

    const {body} = req;

    try {
        const newUser = {
            user_name: await body.user_name,
            user_email: await body.user_email
        };
          let data = await User.create(newUser);
        res.json(data);

        return res.status(201).json({
            success: true,
            data:data
        })
        
    } catch (error) {
        console.log(error);
        res.status(500),json({
            msg: "Please contact your system admin."
        })
    }
};

export const putUser = async(req: Request, res:Response)=>{

    const{id} = req.params;

const {body} = req;

    try {
        const user = await User.findByPk(id);
         if(!user){
            return res.status(404).json({
                msg: "There is not user with ID "+id
            });
         }
          await user.update(body);
        
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500),json({
            msg: "Please contact your system admin."
        })
    }
};

export const deletetUser = async (req: Request, res:Response)=>{

    const{id} = req.params;

    const user = await User.findByPk(id);

    if(!user){
            return res.status(404).json({
                msg: "There is not user with ID "+id
            });
         }

        //  await user.destroy();
         await user.update({user_status: false});

    res.json(user)
};