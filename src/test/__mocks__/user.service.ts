import { deleteUser, updateUser, users } from "../stubs/user.stub";

export const UserService = () => jest.fn().mockReturnValue({
    getUsers: jest.fn().mockReturnValue(users()),
    getUser: jest.fn().mockResolvedValue([users()]),
    createUser: jest.fn().mockResolvedValue(users()),
    updateUser: jest.fn().mockResolvedValue(updateUser()),
    deleteUser: jest.fn().mockResolvedValue(deleteUser())
})