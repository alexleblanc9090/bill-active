import { Controller, Get, Param, Post, Logger, Body, Response } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillsDto } from './dto/createBill.dto';
import {Bill} from './schemas/bill.schema';

@Controller('bills')
export class BillsController {
  constructor(private readonly billService: BillsService) {}


  //TODO: Add parameter userId to this method.
  @Get()
  public async getBills(): Promise<Bill[]> {
    return await this.billService.findAll();
  }

  @Post()
  public async createBill
  (
    @Body('date') date: String, 
    @Body('name') name: String, 
    @Body('store') store: String,
    @Body('amount') amount: Number,
    @Body('picture') picture: String
  ): Promise<Bill> {
    var datePurchase = date != null ? this.convertToDate(date) : null;
    var errorMessage: String = await this.isBillValid(datePurchase, name, store, amount, picture);
    if(errorMessage != null){
        Logger.debug(errorMessage);
    }
    return await this.billService.create(new CreateBillsDto(this.convertToDate(date), name, store, amount, picture));
  }

  private async isBillValid(
    date: Date, 
    name: String, 
    store:String, 
    amount:Number, 
    picture: String): Promise<String>{
    Logger.debug(date);
    Logger.debug(name);
    Logger.debug(store);
    Logger.debug(amount);
    Logger.debug('picture');

    var errorMessage: String = "";
    //Check if entries or not null/empty.
    if(!date || !name || !store || !amount || !picture)
      errorMessage = 'Invalid entry. All fields are required.\n';
    //Check if date is valid.  
    if(!(date instanceof Date))
      errorMessage += 'Invalid entry. Date is not a valid date.\n';
    //Check if amount is valid.   
    if(!(amount instanceof Number))
      errorMessage += 'Invalid entry. Amount is not a valid number.\n';
    //Check if picture is valid.
    if(!(picture instanceof String))
      errorMessage += 'Invalid entry. Picture is not a valid string.\n';
    //Check if name is valid.
    if(!(name instanceof String))
      errorMessage += 'Invalid entry. Name is not a valid string.\n';
    //Check if store is valid.
    if(!(store instanceof String))
      errorMessage += 'Invalid entry. Store is not a valid string.\n';

    return errorMessage != "" ? errorMessage : null; //If all entries are valid, return null.
  }

  //TODO: Move this to a helper class. Add Validation. 
  private convertToDate(date: String): Date{
    var dateArray = date != null ? date.split('-') : null;
    Logger.debug(dateArray);
    if(dateArray == null || dateArray.length != 3)
      return null;
    return new Date(Number.parseInt(dateArray[0]), Number.parseInt(dateArray[1]) - 1, Number.parseInt(dateArray[2]));
  }
}

