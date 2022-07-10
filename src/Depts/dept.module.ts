import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeptsController } from './dept.controller';
import { DeptsService } from './dept.service';
import { Dept, DeptSchema } from './Schemas/dept.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dept.name, schema: DeptSchema }])],
  controllers: [DeptsController],
  providers: [DeptsService],
})
export class DeptsModule {}