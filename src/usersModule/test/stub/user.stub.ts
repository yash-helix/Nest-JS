import { User } from "src/graphql"

export const userStub = (): User => {
    return {
        id: "1",
        name: "Yash",
        createdAt: "29-09-2022",
        updatedAt:"29-09-2022"
    }
}

export const createUser = () => {
    return "User created successfully"
}

export const updateUser = () => {
    return "User updated successfully"
}

export const deleteUser = () => {
    return "User deleted successfully"
}