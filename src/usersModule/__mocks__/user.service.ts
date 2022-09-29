import { userStub } from "../test/stub/user.stub";

export const UserService = jest.fn().mockReturnValue({
    getUser: jest.fn().mockReturnValue(userStub())
})