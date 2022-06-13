export class CreateBillsDto {
    constructor(
        public date: Date,
        public name: String,
        public store: String,
        public amount: Number,
        public picture: String
    ) {}
}