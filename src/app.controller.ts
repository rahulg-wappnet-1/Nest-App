import { Controller, Get ,Post,Req,Param} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getUsers(){
    return{
      name:"Rahul",
      email:"rahulguptaslg20@gmail.com"
    }
  }

  @Post('/add')
  storeUser(@Req() req:Request){
      return req.body
  }

  // @Get('/:userid')
  // getUser(@Param() params:{userId:Number}){
  //   return params
  // }
}
