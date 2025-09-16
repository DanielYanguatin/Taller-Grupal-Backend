"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlquileresModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alquileres_controller_1 = require("./alquileres.controller");
const alquileres_service_1 = require("./alquileres.service");
const alquileres_entity_1 = require("./entities/alquileres.entity");
const clientes_entity_1 = require("../clientes/entities/clientes.entity");
const vehiculos_entity_1 = require("../vehiculos/entities/vehiculos.entity");
let AlquileresModule = class AlquileresModule {
};
exports.AlquileresModule = AlquileresModule;
exports.AlquileresModule = AlquileresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alquileres_entity_1.Alquileres, clientes_entity_1.Clientes, vehiculos_entity_1.Vehiculos])],
        controllers: [alquileres_controller_1.AlquileresController],
        providers: [alquileres_service_1.AlquileresService],
    })
], AlquileresModule);
//# sourceMappingURL=alquileres.module.js.map