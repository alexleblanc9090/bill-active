export class CreateBillsDto {
    constructor(
        public datePurchase: Date,
        public name: String,
        public store: String,
        public amount: Number,
        public picture: String
    ) {}
}