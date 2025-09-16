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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlquileresController = void 0;
const common_1 = require("@nestjs/common");
const alquileres_service_1 = require("./alquileres.service");
let AlquileresController = class AlquileresController {
    alquileresService;
    constructor(alquileresService) {
        this.alquileresService = alquileresService;
    }
    getAlquiler(id) {
        return this.alquileresService.findOne(+id);
    }
};
exports.AlquileresController = AlquileresController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AlquileresController.prototype, "getAlquiler", null);
exports.AlquileresController = AlquileresController = __decorate([
    (0, common_1.Controller)('alquileres'),
    __metadata("design:paramtypes", [alquileres_service_1.AlquileresService])
], AlquileresController);
//# sourceMappingURL=alquileres.controller.js.map