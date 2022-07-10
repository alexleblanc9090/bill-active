
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeptDocument = Dept & Document;

/*
in more complex scenarios in which types cannot be implicitly 
reflected (for example, arrays or nested object structures), types must be indicated explicitly, as follows:

@Prop([String])
tags: string[];
*/

//To set a "foreignKey" use :

/*
    import * as mongoose from 'mongoose';
    import { Owner } from '../owners/schemas/owner.schema';

    // inside the class definition
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    owner: Owner;
*/

@Schema()
export class Dept {

  @Prop({required: true})
  amount: number;

  @Prop()
  personInDept: string;

  @Prop()
  personToPay: string;
}

export const DeptSchema = SchemaFactory.createForClass(Dept);