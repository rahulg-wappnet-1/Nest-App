import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(private userService:UserService){}
    @Get()
    getUser(){
        return this.userService.get()
    }

    @Post()
    addUser(@Req() req:Request){
        return this.userService.create(req)
    }

    @Get('/:userid')
    getUserId(@Param() param:{userid:Number}){
        return this.userService.getUser(param.userid)
    }

    @Delete('/:userid')
    deleteUser(@Param() param:{userid:Number}){
       // return `user deleted with user id ${param.userid}`
       return this.userService.delete(param.userid)
    }

    @Patch('/:userid')
    updateUser(@Req() req:Request, @Param() param:Number){
        return this.userService.update(req,param)
    }
}
