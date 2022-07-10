
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

@Schema()
export class Bill {

    @Prop()
    datePurchase: Date;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    store: string;

    @Prop({required: true})
    amount: number;

    @Prop({required: true})
    picture: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);