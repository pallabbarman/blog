"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_js_1 = require("../controllers/authController.js");
// router
const router = (0, express_1.Router)();
// auth routers
router.post('/register', authController_js_1.register);
router.post('/login', authController_js_1.login);
exports.default = router;
