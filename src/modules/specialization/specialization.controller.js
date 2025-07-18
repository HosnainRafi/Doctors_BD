"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const specialization_service_1 = require("./specialization.service");
const specialization_validation_1 = require("./specialization.validation");
const createSpecialization = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = specialization_validation_1.SpecializationValidations.createSpecializationValidation.parse(req);
    const result = yield specialization_service_1.SpecializationService.createSpecialization(body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Specialization created successfully",
        data: result,
    });
}));
// Add other controller methods...
exports.SpecializationController = {
    createSpecialization,
    // getSpecializations, searchSpecializations, etc.
};
