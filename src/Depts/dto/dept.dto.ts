export class CreateDeptDto {
    constructor(
        public amount: Number,
        public personInDept: String,
        public personToPay: String
    ) {}
}