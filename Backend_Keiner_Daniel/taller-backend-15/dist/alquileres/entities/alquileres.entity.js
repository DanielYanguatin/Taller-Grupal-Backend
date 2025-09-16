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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alquileres = void 0;
const clientes_entity_1 = require("../../clientes/entities/clientes.entity");
const vehiculos_entity_1 = require("../../vehiculos/entities/vehiculos.entity");
const typeorm_1 = require("typeorm");
let Alquileres = class Alquileres {
    id_alquileres;
    fecha_inicio;
    fecha_fin;
    cliente;
    vehiculo;
};
exports.Alquileres = Alquileres;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Alquileres.prototype, "id_alquileres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Alquileres.prototype, "fecha_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Alquileres.prototype, "fecha_fin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clientes_entity_1.Clientes, (cliente) => cliente.alquileres),
    (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
    __metadata("design:type", clientes_entity_1.Clientes)
], Alquileres.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehiculos_entity_1.Vehiculos, (vehiculo) => vehiculo.alquileres),
    (0, typeorm_1.JoinColumn)({ name: 'vehiculo_id' }),
    __metadata("design:type", vehiculos_entity_1.Vehiculos)
], Alquileres.prototype, "vehiculo", void 0);
exports.Alquileres = Alquileres = __decorate([
    (0, typeorm_1.Entity)({ name: 'alquileres' })
], Alquileres);
//# sourceMappingURL=alquileres.entity.js.map