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
        return this.userRepository.save(createUserDto)
    }

    update(updateUserDto:UpdateUserDto, userid:number){
        // return{
        //     Body:updateUserDto,
        //     Param : userid
        //  }
        return this.userRepository.update(userid,updateUserDto)
    }

    delete(userid:number){
       // const  p = stringify(param)
        //return `User deleted with id  ${userid}`
        return this.userRepository.delete(userid)
    }

    getUser(id:number){
        return this.userRepository.findOne({where:{id}})
    }

    findByEmail(email:string){
        return this.userRepository.findOne({where:{email}})
    }
}
