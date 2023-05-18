"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
// router
var router = (0, express_1.Router)();
// auth routers
router.post('/register', authController_1.register);
router.post('/login', authController_1.login);
exports.default = router;
