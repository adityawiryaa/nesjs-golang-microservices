import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AppController } from '../controller/app.controller';

@Module({
  imports: [
    ProductModule,
    UserModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
