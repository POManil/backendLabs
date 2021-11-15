// Commandes PowerShell à utiliser pour run l'application :
// cd "D:\Info\IESN\BAC3\QUADRIMESTRE 1\IG3O7 Programmation et nouvelles techno\Technologies back-end et cloud\labo1"
// npm run dev
// permet de simuler la DB
const produits = [
	{id : 1, nom : "PlayStation 4", prix:400},
	{id : 2, nom : "Xbox One", prix:399.99},
	{id : 3, nom : "Nintendo Switch", prix:349.99}
]; 

module.exports.getProduit = (id) => {
	const resultats = produits.filter(p => p.id === id);
	if(resultats.length > 0)
		return resultats[0];
	else
		throw new Error("Aucun produit trouvé");
};

module.exports.postProduit = (id, nom, prix) => {
	produits.push({id, nom, prix});
	return true;
};

module.exports.updatePrix = (id, prix) => {
	for(let i = 0; i < produits.length; i++){
		if(produits[i] === id) {
			produits[i].prix = prix;
			return true;
		}
	}
	return false;
}

module.exports.deleteProduit = (id) => {
	for(let i = 0; i < produits.length; i++){
		if(produits[i] === id) {
			produits.splice(i, 1);
			return true;
		}
	}
	return false; //était mis à true ?
}