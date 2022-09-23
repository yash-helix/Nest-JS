import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput, UpdateUserInput } from "../graphql";
import { UserService } from "./user.service";

 @Resolver('PrismaUser')
 export class UserResolver{
    constructor(private readonly user: UserService){}

   @Query('users')
   async getUsers(){
    return this.user.getUsers();
   }

   @Query('user')
   async getUser(@Args('id') args:string){
    return this.user.getUser(args);
   }

   @Mutation('createUser')
   async createUser(@Args('data') input:CreateUserInput){
    return this.user.createUser(input);
   }

   @Mutation('updateUser')
   async updateUser(@Args('data') input:UpdateUserInput){
    return this.user.updateUser(input);
   }

   @Mutation('deleteUser')
   async deleteUser(@Args('id') id:string){
    return this.user.deleteUser(id);
   }
 }