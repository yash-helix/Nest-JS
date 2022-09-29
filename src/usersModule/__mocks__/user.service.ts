import { userStub, createUser, updateUser, deleteUser } from "../test/stub/user.stub"

export const UserService = jest.fn().mockReturnValue({
    getUser: jest.fn().mockReturnValue(userStub()),
    getUsers: jest.fn().mockReturnValue([userStub()]),
    createUser: jest.fn().mockReturnValue(createUser()),
    updateUser: jest.fn().mockReturnValue(updateUser()),
    deleteUser: jest.fn().mockReturnValue(deleteUser())
})