
const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Ecran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Étape 1 : Affichage du catalogue
console.log("----- Catalogue de produits -----");

for (let i = 0; i < produits.length; i++) {
    console.log(produits[i].nom + " : " + produits[i].prix + " MAD");
}

// Étape 2 : Produits disponibles
const Disponibles = produits.filter(function (produit) {
    return produit.stock > 0;
});

console.log("Produits disponibles : " + Disponibles.length);

// Étape 3 : Valeur totale du stock
const valeurStock = produits.reduce(function (total, produit) {
    return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur totale du stock : " + valeurStock + " MAD");

// Étape 4 et 10 : Produit disponible le moins cher
if (Disponibles.length > 0) {

    const produitMinimal = Disponibles.reduce(function (min, produit) {
        return produit.prix < min.prix ? produit : min;
    });

    // Déstructuration
    const { nom, prix } = produitMinimal;

    console.log(`Produit le moins cher : ${nom} (${prix} MAD)`);

} else {
    console.log("Aucun produit disponible.");
}

// Étape 5 : Résumé avec map()
const resume = produits.map(produit => {
    return produit.nom + " - " + produit.prix + " MAD - " + produit.stock + " unités";
});

console.log("----- Résumé du catalogue -----");

resume.forEach(ligne => console.log(ligne));

// Test 1 : Écran à stock nul
console.log("----- Test 1 : Écran à stock nul -----");

const disponibles = produits.filter(p => p.stock > 0);

console.table(disponibles);

// Test 2 : Tous les stocks mis à zéro
console.log("----- Test 2 : Tous les stocks à zéro -----");

const copieVide = produits.map(p => ({ ...p, stock: 0 }));

const dispoVide = copieVide.filter(p => p.stock > 0);

if (dispoVide.length === 0) {
    console.log("Aucun produit disponible ; aucun plantage.");
}

// Test 3 : Catalogue vide
console.log("----- Test 3 : Catalogue vide -----");

const produitsVides = [];

const valeurTotale = produitsVides.reduce(
    (total, produit) => total + produit.prix * produit.stock,
    0
);

console.log("Valeur totale du stock :", valeurTotale, "MAD");

// Test 4 : Vérification des données
console.log("----- Test 4 : Vérification des données -----");

function estValide(produit) {
    return Number.isFinite(produit.prix) &&
        Number.isFinite(produit.stock) &&
        produit.prix >= 0 &&
        produit.stock >= 0;
}

const produitsTest4 = [
    { nom: "Clavier", prix: 120, stock: 5 },
    { nom: "Souris", prix: -80, stock: 8 },
    { nom: "Écran", prix: 900, stock: -2 },
    { nom: "Casque", prix: "abc", stock: 3 }
];

produitsTest4.forEach(produit => {
    console.log(produit.nom, ":", estValide(produit));
});
const produitMinimal = Disponibles.reduce((min, produit) =>
    produit.prix < min.prix ? produit : min
);

// Déstructuration
const { nom, prix } = produitMinimal;

console.log(`Produit disponible le moins cher : ${nom} - ${prix} MAD`);