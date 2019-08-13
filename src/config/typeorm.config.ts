import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'owezzy',
    password: 'owezzy',
    database: 'task-mngt-nestjs',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
};
