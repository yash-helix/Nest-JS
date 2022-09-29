import { User } from "src/graphql"

export const userStub = (): User => {
    return {
        id: "1",
        name: "Yash",
        createdAt: "29-09-2022",
        updatedAt:"29-09-2022"
    }
}