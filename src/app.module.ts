import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* My imports */
import { BillsModule } from './bills/bills.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    BillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
