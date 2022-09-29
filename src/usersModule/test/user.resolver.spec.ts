import { Test } from '@nestjs/testing';
import { CreateUserInput, UpdateUserInput, User } from 'src/graphql';
import { UserResolver } from '../user.resolver';
import { UserService } from '../user.service';
import { userStub } from './stub/user.stub';

jest.mock("../user.service");

describe("User Controller", () => {

    let userResolver: UserResolver;
    let userService: UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UserResolver],
            providers: [UserService]
        }).compile()

        userResolver = moduleRef.get<UserResolver>(UserResolver);
        userService = moduleRef.get<UserService>(UserService);
        jest.clearAllMocks();
    })


    // get single user
    describe("GET USER", () => {
        describe("Is getUser Called", () => {

            let user: User;
            beforeEach(async () => {
                user = await userResolver.getUser(userStub().id);
            })

            test("Parameter Accept Test", () => {
                expect(userService.getUser).toBeCalledWith(userStub().id)
            })

            test("getUser return test", () => {
                expect(user).toEqual(userStub())
            })
        })
    })


    // get all users api test
    describe('GET USERS', () => {
        describe("IS getUsers called", () => {
            let user: User[];

            beforeEach(async () => {
                user = await userResolver.getUsers();
            })

            test("calling user service", () => {
                expect(userService.getUsers)
            })

            test("testing response of getUsers", () => {
                expect(user).toEqual([userStub()])
            })
        })
    })
    


    // create user api test
    describe("CREATE USER", () => {
        describe('IS createUser called', () => {
            let user: User;
            let createUserIP: CreateUserInput;

            beforeEach(async () => {
                createUserIP = {
                    id: userStub().id,
                    name: userStub().name,
                }

                user = await userResolver.createUser(createUserIP)
            })

            test("called createUser API", () => {
                expect(userService.createUser).toBeCalledWith(createUserIP);
            })

            test("testing response of createUser", () => {
                expect(user).toEqual("User created successfully");
            })
        })
    })


    // update user api test
    describe('UPDATE USER', () => {
        describe('IS updateUser called', () => {
            let updateUserInput: UpdateUserInput;
            let res:String;

            beforeEach(async () => {
                updateUserInput = {
                    id: userStub().id,
                    name: userStub().name
                }

                res = await userResolver.updateUser(updateUserInput);
            })

            test("called updateUser API", () => {
                expect(userService.updateUser).toBeCalledWith(updateUserInput);
            })

            test("testing response of updateUser", () => {
                expect(res).toEqual("User updated successfully");
            })
        })
    });


    // delete user api test
    describe('DELETE USER', () => {
        describe('IS deleteUser', () => {
            let deleteUserInput: string = userStub().id;
            let res:String;

            beforeEach(async () => {
                res = await userResolver.deleteUser(deleteUserInput);
            })

            test("called deleteUser API", () => {
                expect(userService.deleteUser).toBeCalledWith(deleteUserInput);
            })
            
            test("testing response of deleteUser", () => {
                expect(res).toEqual("User deleted successfully");
            })
        })
    })

})