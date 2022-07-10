"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsController = void 0;
const common_1 = require("@nestjs/common");
const bills_service_1 = require("./bills.service");
const createBill_dto_1 = require("./dto/createBill.dto");
let BillsController = class BillsController {
    constructor(billService) {
        this.billService = billService;
    }
    async getBills() {
        return await this.billService.findAll();
    }
    async createBill(date, name, store, amount, picture) {
        var datePurchase = date != null ? this.convertToDate(date) : null;
        var errorMessage = await this.isBillValid(datePurchase, name, store, amount, picture);
        if (errorMessage != null) {
            common_1.Logger.debug(errorMessage);
        }
        return await this.billService.create(new createBill_dto_1.CreateBillsDto(this.convertToDate(date), name, store, amount, picture));
    }
    async isBillValid(date, name, store, amount, picture) {
        common_1.Logger.debug(date);
        common_1.Logger.debug(name);
        common_1.Logger.debug(store);
        common_1.Logger.debug(amount);
        common_1.Logger.debug('picture');
        var errorMessage = "";
        if (!date || !name || !store || !amount || !picture)
            errorMessage = 'Invalid entry. All fields are required.\n';
        if (!(date instanceof Date))
            errorMessage += 'Invalid entry. Date is not a valid date.\n';
        if (!(amount instanceof Number))
            errorMessage += 'Invalid entry. Amount is not a valid number.\n';
        if (!(picture instanceof String))
            errorMessage += 'Invalid entry. Picture is not a valid string.\n';
        if (!(name instanceof String))
            errorMessage += 'Invalid entry. Name is not a valid string.\n';
        if (!(store instanceof String))
            errorMessage += 'Invalid entry. Store is not a valid string.\n';
        return errorMessage != "" ? errorMessage : null;
    }
    convertToDate(date) {
        var dateArray = date != null ? date.split('-') : null;
        common_1.Logger.debug(dateArray);
        if (dateArray == null || dateArray.length != 3)
            return null;
        return new Date(Number.parseInt(dateArray[0]), Number.parseInt(dateArray[1]) - 1, Number.parseInt(dateArray[2]));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "getBills", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('date')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('store')),
    __param(3, (0, common_1.Body)('amount')),
    __param(4, (0, common_1.Body)('picture')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String,
        Number,
        String]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "createBill", null);
BillsController = __decorate([
    (0, common_1.Controller)('bills'),
    __metadata("design:paramtypes", [bills_service_1.BillsService])
], BillsController);
exports.BillsController = BillsController;
//# sourceMappingURL=bills.controller.js.map