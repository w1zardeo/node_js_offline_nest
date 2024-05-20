import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/types/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { JwtStrategy } from './jwt.strategy';
import { config } from 'dotenv';
import { ConfigEnum } from 'src/common/enums/config.enum';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';

config();
const configService = new ConfigService();

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: configService.get(ConfigEnum.JWT_SECRET), // Замініть на свій секретний ключ
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
