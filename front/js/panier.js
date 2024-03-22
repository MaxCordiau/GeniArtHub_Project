// defini cartItems comme un tableau contenant les articles du panier

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsElement = document.querySelector('.cart-items');


function totalQuantity(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Vérifier la quantité de données dans le panier
    if(cart.length > 0){
        // Si c'est supérieur à 0, cela signifie qu'on a des éléments dans le panier
        //                         (accumulateur, valeurActuelle) => accumulateur + valeurActuelle, valeurInitiale
        const quantité = cart.reduce((acc, el) => acc + el.quantity, 0)
        return(quantité)
    } 
}
totalQuantity()
document.querySelector('.total-quantity').textContent = totalQuantity();

let totalPrice = 0;
cartItems.forEach(function(el) {
    // Vérifier si le prix et la quantité sont valides
    const price = parseFloat(el.index.price);
    const quantity = parseInt(el.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
        // Calculer le prix total pour l'article
        const totalPrice = price * quantity;
        console.log("Prix total article : ",totalPrice)
        return totalPrice;
    }});
    
let totalPannier = 0;
cartItems.forEach(function(el) {
    const price = parseFloat(el.price);
    const quantity = parseInt(el.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
        // Calculer le prix total de tout les article dans le panier
        const totalPannier = totalPrice * quantity;
}});

async function displayCart(){
// Ajoutez un élément pour chaque article du panier
    cartItems.forEach(async el => {
        const req = await fetch(`http://localhost:3000/api/products/${el.id}`);
        const data = await req.json();
        // chercher item.data_index dans datas.declinaisons
        let format = data.declinaisons[el.data_index];
        //stocker le prix dans une variable
        let price = format.index;
        // Créer un élément de div pour chaque article
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        // Construire le contenu de l'élément de l'article
        itemElement.innerHTML = `
            <img src="${el.image}" alt="${el.title}">
            <div class="el-details">
                <h4>${el.title}</h4>
                <p>Description: ${el.description}</p>
                <p>Taille: ${el.size}</p>
                <div>
                <p>Quantité: <input type="number" value="${el.quantity}" data-id="${el.id}" data-format="${el.quantity}" min="1"></p>
                </div>
                <p>Prix unitaire: $${el.price}</p>
                <button class="remove-el" data-index="${cartItems.indexOf(el)}">Supprimer</button>
            </div>
        `;
        // document.querySelector('.description').textContent = `${item.description.substring(0, 200)}...`
        // document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
        // affiche les tout element dans le html
        // document.querySelector('.cart-items').insertAdjacentHTML('beforeend', itemElement);
        cartItemsElement.appendChild(itemElement);
        // Ajouter l'élément de l'article à l'élément de la liste des articles du panier
    });
}
displayCart()
// async function displayCart(){
//     // parcourir chacun des articles du pannier
//     totalPannier.forEach(async el => {
//         // recuperer l'article de la base de données
//         const req = await fetch(`http://localhost:3000/api/products/${el.id}`);
//         const data = await req.json();
//         // ont parcour les données en recuperant les id et les quantité le format le prix et l'image
//         const article=
//         `<article class="article"> 
//             <img src="${data.imageUrl}" alt="${data.name}">
//             <h3>${data.name}</h3>
//             <p>Description: ${data.description}</p>
//             <p class="price">Prix unitaire: $${data.declinaison[el.index].prix}</p>
//             <div>
//                 <p>Quantité: <input type="number" value="${el.quantity}" data-id="${el.id}" data-format="${el.quantity}" min="1"></p>
//             </div>
//             <button class="remove-item" data-index="${totalPannier.indexOf(el)}">Supprimer</button>
//         </article>`
//         document.querySelector('#pannier').insertAdjacentHTML('beforeend', article);
//         updateTotal()
//     })
// }
// displayCart()


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



