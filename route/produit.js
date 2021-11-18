const ProduitControleur = require("../controleur/produit");
const Router = require("express-promise-router");
const router = new Router;

router.get('/:id', ProduitControleur.getProduit);
router.post('/', ProduitControleur.postProduit);
router.patch('/', ProduitControleur.updateProduit);
router.delete('/', ProduitControleur.deleteProduit);

module.exports = router;