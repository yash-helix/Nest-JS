import { User } from "src/graphql";

export const users = (): User => {
    return {
        id: "1",
        name: "Yash",
        createdAt: "19-09-2022",
        updatedAt: "19-09-2022"
    }
}

export const updateUser = (): String => {
    return "User updated successfully"
}

export const deleteUser = (): String => {
    return "User deleted successfully"
}