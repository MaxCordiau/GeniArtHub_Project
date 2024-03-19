// JavaScript pour ajouter des articles au panier

// recuperer les données du localstorage
let cart = JSON.parse(localStorage.getItem('cart')) || []
// afficher le nombre d'articles dans le panier
document.querySelector('.cart span').textContent = cart.length
// affiche le contenu du panier avec titre, nom, prix, quantité
const cartItemsElement = document.querySelector('.cart-items')




// Supposons que vous avez un tableau d'objets représentant les articles dans le panier
let cartItems = [
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


// Ajout des articles au panier
cartItems.forEach(function(item) {
    let itemElement = document.createElement('div');
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
