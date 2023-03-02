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

    update(updateUserDto:UpdateUserDto, param:Number){
        return{
            Body:updateUserDto,
            Param : param
        }
    }

    delete(param:Number){
       // const  p = stringify(param)
        return `User deleted with id  ${param}`
    }

    getUser(param:Number){
        return `User with id ${param}`
    }
}
