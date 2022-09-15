import { Controller, Get, Post, Req, Param, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { DataProps, DeleteUserType, UpdateUserType, UserCreateType } from 'types';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //------------------------------
  //            GET
  // -----------------------------
  @Get("getUser")
  getAllUsers(): DataProps {
    return this.appService.getAllUsers();
  }

  @Get("getUser/:id")
  getUserByID(@Param() param:{id:String}):DataProps{
    const uid = param.id
    return this.appService.getUserByID(uid);
  }


  //------------------------------
  //            POST
  // -----------------------------
  @Post("createUser")
  createUser(@Req() req:Request):UserCreateType{
    const {name, role} = req.body

    if(!name || !role) return

    return this.appService.createUser(name, role);
  }


  //------------------------------
  //            PATCH
  // -----------------------------
  @Patch("updateUser")
  updateUser(@Req() req:Request):UpdateUserType{
    const {id, name, role} = req.body;

    if(!id) return

    return this.appService.updateUser(id, name, role);
  }


  //------------------------------
  //            DELETE
  // -----------------------------
  @Delete("deleteUser")
  deleteUser(@Req() req:Request):DeleteUserType{
    const {id} = req.body;
    if(id)
      return this.appService.deleteUser(id);
    return
  }
}
