"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const videos_1 = __importDefault(require("./videos/videos"));
exports.default = (router) => {
    router.use('/config', config_1.default(router));
    router.use('/videos', videos_1.default(router));
    return router;
};
//# sourceMappingURL=router.js.map