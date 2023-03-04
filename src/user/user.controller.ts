import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user-dto";
import { CreateUserDto } from "./dto/create-user-dto";

@Controller('/user')
export class UserController {
    constructor(private userService:UserService){}
    @Get()
    getUser(){
        return this.userService.get()
    }

    @Post()
    addUser(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Get('/:userid')
    getUserId(@Param('userid' ,ParseIntPipe) userid:Number){
        return this.userService.getUser(userid)
    }

    @Delete('/:userid')
    deleteUser(@Param('userid',ParseIntPipe) userid:Number){
       // return `user deleted with user id ${param.userid}`
       return this.userService.delete(userid)
    }

    @Patch('/:userid')
    updateUser(@Body() updateUserDto:UpdateUserDto, @Param('userid',ParseIntPipe) userid:Number){
        return this.userService.update(updateUserDto,userid)
    }
}
