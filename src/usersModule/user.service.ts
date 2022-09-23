import { Injectable } from "@nestjs/common";
import { CreateUserInput, UpdateUserInput, User } from "../graphql";
import { PrismaService } from "../prisma.service";

 @Injectable()
 export class UserService{
    constructor(private readonly prisma: PrismaService){}

    async getUsers():Promise<User[]>{
        return this.prisma.prismaUsers.findMany({})
    }

    async getUser(id:string):Promise<User>{
        return this.prisma.prismaUsers.findFirst({where:{id:id}})
    }

     async createUser(input:CreateUserInput): Promise<User> {
         try {
             let createdAt = String(new Date());
             let updatedAt = String(new Date());
             let newData = { ...input, createdAt, updatedAt }

             await this.prisma.prismaUsers.create({data:newData})
             return newData
         }
         catch (error) {
             return
         }
     }

    async updateUser(input:UpdateUserInput):Promise<String>{
        try {
            await this.prisma.prismaUsers.update({
                where:{
                    id:input.id
                },
                data:{
                    name:input.name,
                    updatedAt:String(new Date())
                }
            });
            return "User updated sucessfully :)"
        } 
        catch (error) {
            return "User updation failed, Unexpected error occurred :("
        }
    }

    async deleteUser(id:string):Promise<string>{
        try {
            await this.prisma.prismaUsers.delete({where:{id:id}})
            return "User Deleted"
        }
        catch (error) {
            return "Error Occurred"
        }
    }
}