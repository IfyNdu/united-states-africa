"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.get('/video', (req, res, next) => {
        res.send({ videos: 'ALL VIDEOS' });
    });
    router.get('/video/:id', (req, res, next) => {
        res.send({ video: `THIS ${req.params.id} VIDEO` });
    });
    return router;
};
//# sourceMappingURL=videos.js.map