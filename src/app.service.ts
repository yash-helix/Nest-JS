import { Injectable } from '@nestjs/common';
import { DataProps, DeleteUserType, UpdateUserType } from 'types';
import {data} from "../staticData";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {

  getAllUsers(): DataProps {
    return data;
  }

  getUserByID(id:String): DataProps {
    return data.filter(user => user.id === id)
  }


  createUser(name: String, role: String): DataProps {
    let newUser = {name, role, id:uuidv4()}
    let allUsers = {...data, newUser}
    return allUsers
  }


  updateUser(id, name, role): UpdateUserType {
    let updatedData = data.map(user => {
      return user.id === id ? {name, role, id} : user
    })
    return {id, name, role}
  }


  deleteUser(id): DeleteUserType {
    let updatedData = data.filter(user => user.id !== id)
    return {msg:"Deleted Successfully", data:updatedData}
  }
}

