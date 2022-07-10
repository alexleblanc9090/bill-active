import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

/* My imports */
import { BillsModule } from './bills/bills.module';
import { UsersModule } from './users/users.module';
import { DeptsModule } from './Depts/dept.module';

@Module({
  imports: [
    UsersModule,
    BillsModule,
    DeptsModule,
    MongooseModule.forRoot('mongodb+srv://Admin:QTa9p1lTP480ZlIN@cluster0.6ewuk.mongodb.net/billActive?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
