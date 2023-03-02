import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { stringify } from 'querystring';

@Injectable()
export class UserService {
    get(){
        return {
            name:"Rahul Gupta",
            email:"rahul@gmail.com"
        }
    }
    create(req:Request){
        return req.body
    }

    update(req:Request, param:Number){
        return{
            Body: req.body,
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
