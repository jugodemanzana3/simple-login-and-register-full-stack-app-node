"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_js_1 = require("../controllers/auth.js");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', auth_js_1.login);
router.post('/register', auth_js_1.register);
router.get('/verify', auth_js_1.verifyAccessToken);
router.post('/logout', auth_js_1.logout);
router.post('/forgot-password', auth_js_1.forgotPassword);
router.post('/reset-password', auth_js_1.resetPassword);
