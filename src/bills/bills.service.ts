import { Injectable } from '@nestjs/common';

@Injectable()
export class BillsService {
  getBill(): string {
    return 'This is a bill';
  }
}