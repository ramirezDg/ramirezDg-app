"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataServices = __importStar(require("../services/infoServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(dataServices.getInfo());
});
router.get('/', (_req, res) => {
    res.send(dataServices.getAbilityName());
});
router.get('/:id', (req, res) => {
    const entry = dataServices.finById_name(+req.params.id);
    return (entry != null)
        ? res.send(entry)
        : res.sendStatus(404);
});
router.post('/', (req, res) => {
    try {
        const newAbilityEntry = (0, utils_1.default)(req.body);
        const newNameAbility = newAbilityEntry.abilityName;
        const newAbility = dataServices.addInfo(newNameAbility);
        res.json(newAbility);
    }
    catch (error) {
        if (error instanceof Error) {
            // Ahora TypeScript sabe que "error" es de tipo "Error"
            res.status(400).send(error.message);
        }
        else {
            // Manejar otros casos si es necesario
            res.status(400).send('An unknown error occurred');
        }
    }
});
exports.default = router;
