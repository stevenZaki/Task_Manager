// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { TaskModule } from './task/task.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      // .Configure the database connection
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JYPmcq?/5ByFm.S',
      database: 'task_manager_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
