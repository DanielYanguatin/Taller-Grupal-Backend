"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vehiculos_controller_1 = require("./vehiculos.controller");
const vehiculos_service_1 = require("./vehiculos.service");
const vehiculos_entity_1 = require("./entities/vehiculos.entity");
let VehiculosModule = class VehiculosModule {
};
exports.VehiculosModule = VehiculosModule;
exports.VehiculosModule = VehiculosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vehiculos_entity_1.Vehiculos])],
        controllers: [vehiculos_controller_1.VehiculosController],
        providers: [vehiculos_service_1.VehiculosService],
        exports: [typeorm_1.TypeOrmModule],
    })
], VehiculosModule);
//# sourceMappingURL=vehiculos.module.js.map