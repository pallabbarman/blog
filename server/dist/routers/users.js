"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const express_1 = require("express");
const usersController_js_1 = require("../controllers/usersController.js");
// router
const router = (0, express_1.Router)();
// users routers
router.get('/', usersController_js_1.getUsers);
router.get('/:id', usersController_js_1.getUser);
router.put('/:id', usersController_js_1.updateUser);
router.delete('/:id', usersController_js_1.deleteUser);
exports.default = router;
