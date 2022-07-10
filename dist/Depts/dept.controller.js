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
exports.DeptsController = void 0;
const common_1 = require("@nestjs/common");
const dept_service_1 = require("./dept.service");
const dept_dto_1 = require("./dto/dept.dto");
let DeptsController = class DeptsController {
    constructor(deptService) {
        this.deptService = deptService;
    }
    getAll() {
        return this.deptService.findAll();
    }
    async createBill(personToPay, personInDept, amount) {
        this.deptService.create(new dept_dto_1.CreateDeptDto(amount, personInDept, personToPay));
        return true;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeptsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('personToPay')),
    __param(1, (0, common_1.Body)('personInDept')),
    __param(2, (0, common_1.Body)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        Number]),
    __metadata("design:returntype", Promise)
], DeptsController.prototype, "createBill", null);
DeptsController = __decorate([
    (0, common_1.Controller)('depts'),
    __metadata("design:paramtypes", [dept_service_1.DeptsService])
], DeptsController);
exports.DeptsController = DeptsController;
//# sourceMappingURL=dept.controller.js.map