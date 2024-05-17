import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../src/users/types/users.module';
// import { User } from './users/entities/user.entity';
import { DatabaseModule } from './database/database.module';
import { CreateUserSchema1715845358766 } from '../migrations/1715845358766-create_user_schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    CreateUserSchema1715845358766
  ],
  controllers: [],
})
export class AppModule {}
