export type DataProps = {
    name:String;
    id:String;
    role:String
}[]

export type UserCreateType = {
    name:String
    role:String
    id:String
}[]

export type UpdateUserType = {
    name:String
    role:String
    id:Number
}


export type DeleteUserType = {
    msg:String
    data:DataProps
}