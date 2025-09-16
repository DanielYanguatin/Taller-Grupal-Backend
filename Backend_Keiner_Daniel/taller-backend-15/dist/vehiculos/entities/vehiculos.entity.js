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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const typeorm_1 = require("typeorm");
const alquileres_entity_1 = require("../../alquileres/entities/alquileres.entity");
let Vehiculos = class Vehiculos {
    id_vehiculos;
    marca;
    modelo;
    ano;
    matricula;
    alquileres;
};
exports.Vehiculos = Vehiculos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vehiculos.prototype, "id_vehiculos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehiculos.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehiculos.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vehiculos.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Vehiculos.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alquileres_entity_1.Alquileres, (alquiler) => alquiler.vehiculo),
    __metadata("design:type", Array)
], Vehiculos.prototype, "alquileres", void 0);
exports.Vehiculos = Vehiculos = __decorate([
    (0, typeorm_1.Entity)({ name: 'vehiculos' })
], Vehiculos);
//# sourceMappingURL=vehiculos.entity.js.map