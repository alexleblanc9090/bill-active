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
exports.DeptsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const dept_schema_1 = require("./Schemas/dept.schema");
let DeptsService = class DeptsService {
    constructor(deptModel) {
        this.deptModel = deptModel;
    }
    async create(createDeptDto) {
        const createdDept = new this.deptModel(createDeptDto);
        return createdDept.save();
    }
    async findAll() {
        return this.deptModel.find().exec();
    }
};
DeptsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(dept_schema_1.Dept.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DeptsService);
exports.DeptsService = DeptsService;
//# sourceMappingURL=dept.service.js.map