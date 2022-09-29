import {Test} from '@nestjs/testing';
import { User } from 'src/graphql';
import { UserResolver } from '../user.resolver';
import { UserService } from '../user.service';
import { userStub } from './stub/user.stub';

jest.mock("../user.service");

describe("User Controller", () => {

    let userResolver: UserResolver;
    let userService: UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports:[],
            controllers:[UserResolver],
            providers:[UserService]
        }).compile()

        userResolver = moduleRef.get<UserResolver>(UserResolver);
        userService = moduleRef.get<UserService>(UserService);
        jest.clearAllMocks();
    })


    describe("GET USER", () => {
        describe("Is getUser Called", () => {

            let user:User;
            beforeEach(async ()=>{
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

})