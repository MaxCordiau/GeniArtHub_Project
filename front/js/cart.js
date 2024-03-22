// recuperer le pannier depuis le localstorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// si le pannier est vide afficher le message votre pannier est vide veuillez ajouter des articles au pannier 
if(cartItems.length === 0){
    document.querySelector('#pannier').innerHTML = "Votre panier est vide. Veuillez ajouter des articles au panier."
}

// creation d'une fonction async pour recuperer les articles du pannier pour fair la corelation avec les articles de la base de données avec les id et les format pour afficher les prix et les image et les titre 
async function displayCart(){
    // parcourir chacun des articles du pannier
    totalPannier.forEach(async el => {
        // recuperer l'article de la base de données
        const req = await fetch(`http://localhost:3000/api/products/${el.id}`);
        const data = await req.json();
        // ont parcour les données en recuperant les id et les quantité le format le prix et l'image
        const article=
        `<article class="article"> 
            <img src="${data.imageUrl}" alt="${data.name}">
            <h3>${data.name}</h3>
            <p>Description: ${data.description}</p>
            <p class="price">Prix unitaire: $${data.declinaison[el.index].prix}</p>
            <div>
                <p>Quantité: <input type="number" value="${el.quantity}" data-id="${el.id}" data-format="${el.quantity}" min="1"></p>
            </div>
            <button class="remove-item" data-index="${totalPannier.indexOf(el)}">Supprimer</button>
        </article>`
        document.querySelector('#pannier').insertAdjacentHTML('beforeend', article);
        updateTotal()
    })
}
displayCart()

// une fonctionb pour mettre a jour le prix total et le nombre total d'article dans le pannier
function updateTotal(){
    const totalArticle = document.querySelector('#totalArticle');
    const montanttotal = document.querySelector('#montanttotal');

    let totalArticles = 0;
    let totalAmount = 0;
    // ont fait le calcule du nombre d'article, pour ça ont recuper chacun des produits du pannier, ont recuper le prix unitaire et quantité 
    const price = document.querySelectorALL('.price');
    price.forEach((el, index) => {
        const quantity = el.parentNode.querySelector('input').value;
        const unitPrice = parseFloat(el.textContent);
        totalArticles += parseInt(quantity);
        totalAmount += unitPrice * quantity;
    })
    totalArticle.textContent = totalArticles;
    montanttotal.textContent = totalAmount.toFixed(2);
    nomberItem()
}
updateTotal()