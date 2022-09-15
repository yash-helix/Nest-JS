import {Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { data } from 'staticData';
import {Repository} from 'typeorm';

import { DeleteUserInput, UpdateUserInput, User, UserInput } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAllUsers() {
    return this.userRepository.find();
  }

  findById(id: string) {
    return this.userRepository.findOne({where:{id:id}});
  }

  async createUser( data: UserInput ) {
    const user = {
      id:randomUUID(),
      name:data.name,
      createdAt:new Date(),
      updatedAt:new Date(),
    }
    await this.userRepository.save(user);
    return user;
  }

  async deleteUser(id: DeleteUserInput){
    await this.userRepository.delete(id)
    return {msg:"Deleted Successfully User"}
  }

  async updateUser(data: UpdateUserInput) {
    try {
      let a = await this.userRepository.update(data.id, data)
      if (a.affected >= 1)
        return { id: data.id, name: data.name, msg: "Updated Successfully" }
      else return { msg: "Update Unsuccessfull" }
    }
    catch (error) {
      return { msg: "Update Unsuccessfull" }
    }
  }
}
