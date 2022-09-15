import { Int, Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { Delete, DeleteUserInput, GetUserByIDInput, UpdatedUser, UpdateUserInput, User, UserInput } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => [User], { name: 'users', nullable: true })
  getUsers() {
    return this.userService.findAllUsers();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUserById(@Args('data') input: GetUserByIDInput):Promise<User> {
    return this.userService.getUserById(input);
  }

  @Mutation(() => User, { name: 'createUser'})
  async createUser(@Args('data') input: UserInput): Promise<User> {
    return this.userService.createUser(input);
  }

  @Mutation(() => Delete, { name: 'deleteUser'})
  async deleteUser(@Args('data') input: DeleteUserInput): Promise<any> {
    return this.userService.deleteUser(input);
  }

  @Mutation(()=>UpdatedUser, {name:"updateUser"})
  async updateUser(@Args('data') input: UpdateUserInput): Promise<any> {
    return this.userService.updateUser({...input, updatedAt:new Date()})
  }
}
