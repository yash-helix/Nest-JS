import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql';
import {User} from "./modules/user.model";
import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo'
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abcd',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graph.gql'
    }),
     
    UserModule
  ],
})
export class AppModule {}
