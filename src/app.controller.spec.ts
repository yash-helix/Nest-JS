// import { Test, TestingModule } from '@nestjs/testing';
// import { DeleteUserInput, GetUserByIDInput, UpdateUserInput, UserInput } from './modules/user.model';
// import { UserResolver } from './modules/user.resolver';
// import { UserService } from './modules/user.service';

// describe('Employee Resolver', () => {
//   let resolver: UserResolver;
//   let service : UserService

//   let getUserByIDInput = new GetUserByIDInput();
//   let userInput = new UserInput();
//   let updateUserInput = new UpdateUserInput();
//   let deleteUserInput = new DeleteUserInput();

//   getUserByIDInput.id = "ff13b12e-f0c4-4a70-99d5-d49277e45281";
//   userInput.name="yash";
//   updateUserInput.id="asdasd"; updateUserInput.name="fake"; updateUserInput.updatedAt= new Date();
//   deleteUserInput.id="ff13b12e-f0c4-4a70-99d5-d49277e45281";

//   let userService = {
//     findAllUsers: jest.fn(() => {
//       return {
//       name:"fake",
//       createdAt:"asdasd",
//       updatedAt:"sadasd",
//       id:"asdasd"
//     }
//     }),

//     getUserById: jest.fn(id => {
//       return {
//         name: "fake",
//         createdAt: "asdasd",
//         updatedAt: "sadasd",
//         id: "asdasd"
//       }
//     }),

//     createUser: jest.fn(name=>{
//       return {
//         name: "fake",
//         createdAt: "asdasd",
//         updatedAt: "sadasd",
//         id: "asdasd"
//       }
//     }),

//     updateUser: jest.fn(data => {
//       return {
//         name: "fake",
//         updatedAt: "sadasd",
//         msg: "User successfully updated"
//       }
//     }),

//     deleteUser: jest.fn(id => {
//       return {
//         msg:"User Deleted Successfully"
//       }
//     })
//   };


//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [UserResolver, 
//       {
//         provide: UserService,
//         useValue: userService
//       }
//     ],
//     }).compile();

//     resolver = module.get<UserResolver>(UserResolver); 
//     service = module.get<UserService>(UserService); 
//   });


//     it('Testing Employee Resolver', () => {
//       expect(resolver).toBeDefined();
//     });

    
//     it('Testing getUsers Query', () => {
//       expect(resolver.getUsers()).toEqual({
//         name:"fake",
//         createdAt:"asdasd",
//         updatedAt:"sadasd",
//         id:"asdasd"
//       });
//       expect(service.findAllUsers).toBeCalled();
//     });


//     it('Testing single user Query', async() => {
//       expect(await resolver.getUserById(getUserByIDInput)).toEqual({
//         name:"fake",
//         createdAt:"asdasd",
//         updatedAt:"sadasd",
//         id:"asdasd"
//       });
//       expect(service.getUserById).toBeCalled();
//     });

    
//     it("testing the create user query", async() => {
//       expect(await resolver.createUser(userInput)).toEqual({
//         name:"fake",
//         createdAt:"asdasd",
//         updatedAt:"sadasd",
//         id:"asdasd"
//       });
//       expect(service.createUser).toBeCalled();
//     })


//     it("testing the update user query", async() => {
//       expect(await resolver.updateUser(updateUserInput)).toEqual({
//         name: "fake",
//         updatedAt: "sadasd",
//         msg: "User successfully updated"
//       });
//       expect(service.updateUser).toBeCalled();
//     });


//     it("testing the delete user query", async() => {
//       expect(await resolver.deleteUser(deleteUserInput)).toEqual({
//         msg: "User Deleted Successfully"
//       });
//       expect(service.updateUser).toBeCalled();
//     })
// });
