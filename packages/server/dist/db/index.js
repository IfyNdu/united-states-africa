"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.default = {
    init: (url) => {
        return new sequelize_typescript_1.Sequelize(url, { models: ['./models'] });
    }
};
//# sourceMappingURL=index.js.map