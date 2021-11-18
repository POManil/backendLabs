const ClientControler = require("../controleur/clientDB");
const AuthMiddleware = require("../middleware/Identification");

const Router = require("express-promise-router");
const router = new Router;

router.patch('/', AuthMiddleware, ClientControler.updateClient);

module.exports = router;