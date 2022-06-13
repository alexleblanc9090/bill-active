import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { BillsService } from './bills.service';
import { CreateBillsDto } from './dto/createBill.dto';

@Controller('bills')
export class BillsController {
  constructor(private readonly billService: BillsService) {}

  @Get()
  public getBill(): string {
    return this.billService.getBill();
  }

  @Post()
  public async createBill
  (
    @Param('date') date: Date, 
    @Param('name') name: String, 
    @Param('store') store: String,
    @Param('amount') amount: Number,
    @Param('picture') picture: String
  ): Promise<String> {
    var errorMessage = await this.isBillValid(date, name, store, amount, picture);
    if(errorMessage != null)
      return errorMessage; //Contains the error message if the entry is invalid.
    return this.billService.addBill(new CreateBillsDto(date, name, store, amount, picture));
  }

  private async isBillValid(
    date: Date, 
    name: String, 
    store:String, 
    amount:Number, 
    picture: String): Promise<string>{
    //Check if entries or not null/empty.
    if(!date || !name || !store || !amount || !picture)
      return "Invalid entry. All fields are required.";
    //Check if date is valid.  
    if(!(date instanceof Date))
      return "Invalid entry. Date is not a valid date.";
    //Check if amount is valid.   
    if(!(amount instanceof Number))
      return "Invalid entry. Amount is not a valid number.";
    //Check if picture is valid.
    if(!(picture instanceof String))
      return "Invalid entry. Picture is not a valid string.";
    //Check if name is valid.
    if(!(name instanceof String))
      return "Invalid entry. Name is not a valid string.";
    //Check if store is valid.
    if(!(store instanceof String))
      return "Invalid entry. Store is not a valid string.";

    return null;//If all entries are valid, return null.
  }
}

