import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field({ nullable: true })
  name: string;

  @CreateDateColumn()
  @Field({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: true })
  updatedAt: Date;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  name: string;
}

@InputType()
export class DeleteUserInput {
  @Field({ nullable: false })
  id: string;
}

@ObjectType()
export class Delete{
  @Field({ nullable: false })
  msg: string;
}

@InputType()
export class UpdateUserInput{
  @Field({nullable:true})
  id:string
  @Field({nullable:true})
  name:string
  @Field({nullable:false})
  updatedAt:Date
}

@ObjectType()
export class UpdatedUser{
  @Field({nullable:true})
  name:string
  @Field({nullable:true})
  updatedAt:Date
  @Field({nullable:false})
  msg:string
}