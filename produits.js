
const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Ecran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Étape 2 : Déclarer le tableau de produits
console.table(produits);

// Étape 3 : Afficher le catalogue
for (let i = 0; i < produits.length; i++) {
    console.log(produits[i].nom + " : " + produits[i].prix + " MAD");
}

// Étape 4 : Filtrer les produits disponibles
const disponibles = produits.filter((p) => p.stock > 0);
console.log("Produits disponibles :", disponibles.length);

// Étape 5 : Calculer la valeur du stock
const valeurStock = produits.reduce(function (total, produit) {
    return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur totale du stock : " + valeurStock + " MAD");

// Étape 6 : Trouver le produit disponible le moins cher
const Disponibles = produits.filter(function (produit) {
    return produit.stock > 0;
});

if (Disponibles.length > 0) {
    const produitMinimal = Disponibles.reduce(function (min, produit) {
        return produit.prix < min.prix ? produit : min;
    });

    console.log(
        "Produit le moins cher : " +
        produitMinimal.nom + " - " +
        produitMinimal.prix + " MAD"
    );
} else {
    console.log("Aucun produit disponible.");
}

// Étape 7 : Construire le résumé avec map()
const resume = produits.map(produit => {
    return produit.nom + " - " + produit.prix + " MAD - " + produit.stock + " unités";
});

console.log("Résumé du catalogue :");
resume.forEach(ligne => console.log(ligne));

// Étape 8 : Exécuter les quatre tests

console.log("Test 1 : Produits disponibles");

const disponiblesTest1 = produits.filter(
    (p) => p.stock > 0
);

console.table(disponiblesTest1);


console.log("Test 2 : Tous les stocks à zéro");

const copieVide = produits.map(p => ({
    ...p,
    stock: 0
}));

const dispoVide = copieVide.filter(p => p.stock > 0);

if (dispoVide.length == 0) {
    console.log("Aucun produit disponible; aucun plantage.");
} else {
    console.log(copieVide);
}


console.log("Test 3 : Catalogue vide");

const produitsVides = [];

const valeurTotale = produitsVides.reduce(
    (total, produit) => total + (produit.prix * produit.stock),
    0
);

console.log("Valeur totale du stock :", valeurTotale, "MAD");


console.log("Test 4 : Vérification des données");

const produitsTest = [
    { nom: "Clavier", prix: 120, stock: 5 },
    { nom: "Souris", prix: -80, stock: 8 },
    { nom: "Ecran", prix: 900, stock: -1 },
    { nom: "Casque", prix: "240", stock: 3 }
];

produitsTest.forEach(produit => {
    if (
        Number.isFinite(produit.prix) &&
        Number.isFinite(produit.stock) &&
        produit.prix >= 0 &&
        produit.stock >= 0
    ) {
        console.log(produit.nom + " : Données valides");
    } else {
        console.log(produit.nom + " : Données invalides");
    }
});


// Étape 10 : Déstructuration du produit le moins cher
if (Disponibles.length > 0) {
    const produitMinimal = Disponibles.reduce((min, produit) =>
        produit.prix < min.prix ? produit : min
    );

    const { nom, prix } = produitMinimal;

    console.log(`Produit disponible le moins cher : ${nom} - ${prix} MAD`);
}
