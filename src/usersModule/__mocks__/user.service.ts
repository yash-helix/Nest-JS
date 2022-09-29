import { userStub, updateUser, deleteUser } from "../test/stub/user.stub";

export const UserService = () => jest.fn().mockReturnValue({
    getUsers: jest.fn().mockReturnValue(userStub()),
    getUser: jest.fn().mockResolvedValue([userStub()]),
    createUser: jest.fn().mockResolvedValue(userStub()),
    updateUser: jest.fn().mockResolvedValue(updateUser()),
    deleteUser: jest.fn().mockResolvedValue(deleteUser())
})