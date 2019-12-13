"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const router_1 = __importDefault(require("./router"));
const app = express_1.default();
const PORT = process.env.PORT;
exports.default = {
    init: ({ logger, middleware }, sequelize) => {
        app.use(middleware);
        app.use('/api', router_1.default(express_1.Router()));
        sequelize
            .sync({ force: false })
            .then(() => {
            app.listen(process.env.PORT, err => {
                if (err) {
                    return logger.error(err);
                }
                return logger.info(`server is listening on ${PORT}`);
            });
        });
    }
};
//# sourceMappingURL=index.js.map