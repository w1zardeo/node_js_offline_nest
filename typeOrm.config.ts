import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './src/users/entities/user.entity';
// import { Post } from './src/posts/entities/post.entity';
import { CreateUserSchema1715845358766 } from './migrations/1715845358766-create_user_schema';
import { config } from 'dotenv';
import { ConfigEnum } from './src/common/enums/config.enum';
import { AddedUserRole1715845484267 } from './migrations/1715845484267-added_user_role';
import { AddedWeight1715845543414 } from './migrations/1715845543414-added_weight';

config();
const configService = new ConfigService();

const options: DataSourceOptions = {
  type: 'postgres',
  host: configService.get(ConfigEnum.POSTGRES_HOST),
  port: parseInt(configService.get(ConfigEnum.POSTGRES_PORT)),
  username: configService.get(ConfigEnum.POSTGRES_USER),
  database: configService.get(ConfigEnum.POSTGRES_DB),
  password: configService.get(ConfigEnum.POSTGRES_PASSWORD),
  entities: [User],
  migrations: [CreateUserSchema1715845358766, AddedUserRole1715845484267, AddedWeight1715845543414],
};
export default new DataSource(options);
