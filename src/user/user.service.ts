import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { stringify } from 'querystring';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
    get(){
        return {
            name:"Rahul Gupta",
            email:"rahul@gmail.com"
        }
    }
    create(createUserDto:CreateUserDto){
        return createUserDto
    }

    update(updateUserDto:UpdateUserDto, userid:Number){
        return{
            Body:updateUserDto,
            Param : userid
         }
    }

    delete(userid:Number){
       // const  p = stringify(param)
        return `User deleted with id  ${userid}`
    }

    getUser(userid:Number){
        return `User with id ${userid}`
    }
}
