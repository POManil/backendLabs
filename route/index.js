// Commandes PowerShell à utiliser pour run l'application :
// cd "D:\Info\IESN\BAC3\QUADRIMESTRE 1\IG3O7 Programmation et nouvelles techno\Technologies back-end et cloud\Labos\backendLabs"
// 1. vagrant up
// 2. npm run initDB
// 3. npm run dev
const ProduitRouter = require('./produit');
const router = require("express").Router();

router.use("/produit", ProduitRouter);

module.exports = router;