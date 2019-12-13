"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const express_pino_logger_1 = __importDefault(require("express-pino-logger"));
const logger = pino_1.default();
const middleware = express_pino_logger_1.default({ logger });
exports.default = { logger, middleware };
//# sourceMappingURL=logger.js.map