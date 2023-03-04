import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user-dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}
    get(): Promise<User[]>{
        return this.userRepository.find()
            // name:"Rahul Gupta",
            // email:"rahul@gmail.com"
            
        
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
