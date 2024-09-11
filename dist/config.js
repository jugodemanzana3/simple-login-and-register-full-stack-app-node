"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_URL = exports.SECRET_KEY = exports.API_KEY = exports.CLIENT_URL = void 0;
const dotenv_1 = require("dotenv");
const isProduction = process.env.NODE_ENV === 'production';
const envFile = isProduction ? '.env.prod' : '.env.dev';
(0, dotenv_1.config)({ path: envFile });
const CLIENT_URL = process.env.CLIENT_URL;
exports.CLIENT_URL = CLIENT_URL;
const API_KEY = process.env.API_KEY;
exports.API_KEY = API_KEY;
const SECRET_KEY = process.env.SECRET_KEY;
exports.SECRET_KEY = SECRET_KEY;
const DB_URL = process.env.DB_URL;
exports.DB_URL = DB_URL;
const PORT = process.env.PORT;
exports.PORT = PORT;
