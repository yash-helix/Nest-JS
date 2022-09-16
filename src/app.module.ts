import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo'
import { UserModule } from './usersModule/user.module';

@Module({
  imports: [
    UserModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths:['./**/*.graphql']
    }),
  ],
})
export class AppModule {}
