module.exports.getProduit = async (id, client) => {
	return await client.query(`SELECT *
								FROM produit
								WHERE id = ${id};`
							);
}

module.exports.postProduit = async (nom, prix, client) => {
	return await client.query(`INSERT INTO produit (nom, prix)
								VALUES (${nom}, ${prix});`
							);
}

module.exports.updatePrix = async (id, prix) => {
	return await client.query(`UPDATE produit 
								SET prix = ${prix} 
								WHERE id = ${id};`
							);
}

module.exports.deleteProduit = async (id) => {
	return await client.query(`DELETE FROM produit 
								WHERE id = ${id};`
							);
}