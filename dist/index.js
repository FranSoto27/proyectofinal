"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const pelicula_routes_1 = __importDefault(require("./routes/pelicula.routes"));
const cors = require('cors');
const server = new server_1.default();
server.app.use(cors());
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/peliculas', pelicula_routes_1.default);
mongoose_1.default.connect('mongodb+srv://usr_peli:calipso1107@cluster0.iie44np.mongodb.net/proyectoDb', (error) => {
    if (error) {
        throw error;
    }
    console.log('Base de datos online');
});
server.Start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
