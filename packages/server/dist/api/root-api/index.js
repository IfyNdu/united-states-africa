"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.get('/', (req, res, next) => {
        res.send({ expense: 'EXPENSE!!!' });
    });
    return router;
};
//# sourceMappingURL=index.js.map