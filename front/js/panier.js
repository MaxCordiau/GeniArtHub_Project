// defini cartItems comme un tableau contenant les articles du panier

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsElement = document.querySelector('.cart-items');

// affiche la quantité total des article dans le panier
let totalQuantity = 0;
cartItems.forEach(function(item) {
    totalQuantity = item.quantity ;//+ item.id.price 
});
document.querySelector('.total-quantity').textContent = totalQuantity;

let totalPrice = 0;
cartItems.forEach(function(item) {
    // Vérifier si le prix et la quantité sont valides
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
        // Calculer le prix total pour l'article
        const totalPrice = price * quantity;
        console.log("Prix total article : ",totalPrice)
        return totalPrice;
    }});
    
let totalPannier = 0;
cartItems.forEach(function(item) {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
        // Calculer le prix total de tout les article dans le panier
        const totalPannier = totalPrice * quantity;
}});

// Ajoutez un élément pour chaque article du panier
cartItems.forEach(function(item) {
    // Créer un élément de div pour chaque article
    let itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    // Construire le contenu de l'élément de l'article
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="item-details">
            <h4>${item.title}</h4>
            <p>Description: ${item.description}</p>
            <p>Taille: ${item.size}</p>
            <p>Prix unitaire: $${totalPrice}</p>
            <p>Quantité: ${item.quantity}</p>
            <button style="background:red" class="remove-item" data-index="${cartItems.indexOf(item)}">Supprimer</button>
        </div>
    `;
    document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
    // Ajouter l'élément de l'article à l'élément de la liste des articles du panier
    cartItemsElement.appendChild(itemElement);
});

// Ajoutez un gestionnaire d'événements de suppression pour chaque bouton de suppression
document.querySelectorAll('.remove-item').forEach(function(button) {
    button.addEventListener('click', function() {
        const index = button.dataset.index;
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        location.reload(); // Recharger la page pour mettre à jour l'affichage du panier
    });
});

console.log("localStorage : ",localStorage)
// console.log("cart : ",cart)
console.log("cartItems : ",cartItems)

// fair en sorte que le prix soit multiplié par la quantité




// 
// supposons que vous avez un tableau d'objets représentant les articles dans le panier
// let cartItems = [
//     {
//         image: "artwork1.jpg",
//         title: "Titre de l'œuvre 1",
//         description: "Description courte de l'œuvre 1",
//         size: "30x30",
//         price: 100,
//         quantity: 1
//     },
//     {
//         image: "artwork2.jpg",
//         title: "Titre de l'œuvre 2",
//         description: "Description courte de l'œuvre 2",
//         size: "40x40",
//         price: 150,
//         quantity: 1
//     }
// ];
// JavaScript pour ajouter des articles au panier

// Recuperer les données du localstorage

// // defini cartItems comme un tableau vide
// let cartItems = [] 

// // Ajout des articles au panier
// cartItems.forEach(function(item) {
//     let itemElement = document.createElement('div');
//     itemElement.classList.add('cart-item');
    
//     itemElement.innerHTML = `
//         <img src="${item.image}" alt="${item.title}">
//         <div class="item-details">
//             <h4>${item.title}</h4>
//             <p>${item.description}</p>
//             <p>Taille: ${item.size}</p>
//             <p>Prix unitaire: $${item.price.toFixed(2)}</p>
//             <p>Quantité: ${item.quantity}</p>
//         </div>
//     `;
    
//     cartItemsElement.appendChild(itemElement);
// });


// Supposons que vous avez un tableau d'objets représentant les articles dans le panier
// let cartItems = [
//     {
//         image: "artwork1.jpg",
//         title: "Titre de l'œuvre 1",
//         description: "Description courte de l'œuvre 1",
//         size: "30x30",
//         price: 100,
//         quantity: 1
//     },
//     {
//         image: "artwork2.jpg",
//         title: "Titre de l'œuvre 2",
//         description: "Description courte de l'œuvre 2",
//         size: "40x40",
//         price: 150,
//         quantity: 1
//     }
// ];



