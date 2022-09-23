import {Test} from '@nestjs/testing';
import { CreateUserInput, UpdateUserInput, User } from 'src/graphql';
import { UserService } from '../usersModule/user.service';
import {UserResolver} from '../usersModule/user.resolver'
import { users } from './stubs/user.stub';

jest.mock('../usersModule/user.service');

describe("UserResolver", () => {

    let userResolver:UserResolver;
    let userService:UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports:[],
            controllers:[UserResolver],
            providers: [UserService]
        }).compile();

        userResolver = moduleRef.get<UserResolver>(UserResolver);
        userService = moduleRef.get<UserService>(UserService);
        jest.clearAllMocks();
    })

    // test single user API
    describe("get a single user", () => {
        describe('getUser is called', () => {

            let user:User;
            beforeEach(async () => {
                user = await userResolver.getUser(users().id)
            })

            test('calling user service', () => {
                expect(userService.getUser).toBeCalledWith(users().id)
            })
         })
    });

    // get all users api test
    describe('get all users', () => {
        describe("getUsers is called", () => {
            let user:User[];

            beforeEach(async () => {
                user = await userResolver.getUsers()
            })

            test("calling user service", () => {
                expect(userService.getUsers)
            })
        })
    })

    // create user api test
    describe("create user api test", () => {
        describe('createUser api is called', () => { 
            let user:User;
            let createUserIP:CreateUserInput;

            beforeEach(async () => {
                createUserIP = {
                    id:users().id,
                    name:users().name,
                }

                user = await userResolver.createUser(createUserIP)
            })

            test("calling user service", () => {
                expect(userService.createUser).toBeCalledWith(createUserIP);
            })
         })
    })

    // update user api test
    describe('update user api test', () => { 
        describe('updateUser API is called', () => { 
            let updateUserInput:UpdateUserInput;

            beforeEach(async () => {
                updateUserInput = {
                    id:users().id,
                    name:users().name
                }

                let msg:String = await userResolver.updateUser(updateUserInput);
            })

            test("calling user service", () => {
                expect(userService.updateUser).toBeCalledWith(updateUserInput);
            })
         })
     });


     // delete user api test
    describe('delete user api test', () => { 
        describe('deleteUser API is called', () => { 
            let deleteUserInput:string = users().id;

            beforeEach(async () => {
                let msg:String = await userResolver.deleteUser(deleteUserInput);
            })

            test("calling user service", () => {
                expect(userService.deleteUser).toBeCalledWith(deleteUserInput);
            })
         })
     })

})