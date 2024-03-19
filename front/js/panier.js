// JavaScript pour ajouter des articles au panier

// Supposons que vous avez un tableau d'objets représentant les articles dans le panier
var cartItems = [
    {
        image: "artwork1.jpg",
        title: "Titre de l'œuvre 1",
        description: "Description courte de l'œuvre 1",
        size: "30x30",
        price: 100,
        quantity: 1
    },
    {
        image: "artwork2.jpg",
        title: "Titre de l'œuvre 2",
        description: "Description courte de l'œuvre 2",
        size: "40x40",
        price: 150,
        quantity: 1
    }
];

// Sélection de l'élément du panier
var cartItemsElement = document.querySelector('.cart-items');

// Ajout des articles au panier
cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="item-details">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <p>Taille: ${item.size}</p>
            <p>Prix unitaire: $${item.price.toFixed(2)}</p>
            <p>Quantité: ${item.quantity}</p>
        </div>
    `;
    
    cartItemsElement.appendChild(itemElement);
});
