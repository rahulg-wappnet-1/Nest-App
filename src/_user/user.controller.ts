import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class UserController{
    @Get()
    getUser(){
        return {
            name:"Rahul",
            email:"rahul@gmail.com"
        }
    }

    @Post()
    addUser(@Req() req:Request){
        return req.body
    }

    @Get('/:userid')
    getUserId(@Param() param:{userid:Number}){
        return param
    }

    @Delete('/:userid')
    deleteUser(@Param() param:{userid:Number}){
        return `user deleted with user id ${param.userid}`
    }

    @Patch('/:userid')
    updateUser(@Param() param:{userid:Number}){
        return `user updated with user id ${param.userid}`
    }
    
}