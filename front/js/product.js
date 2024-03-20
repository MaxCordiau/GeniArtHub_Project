// Récupérer l'id dans l'url
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

// Fonction init
async function init(){
    const data = await getDatas()
    populateData(data)
}
init()
// Fonction pour faire l'appel à l'API : /products/id
async function getDatas(){
    const req = await fetch(`http://localhost:3000/api/products/${id}`)
    return await req.json()
}

// Fonction pour injecter les données dans le DOM
function populateData(product){
    // Changer le title de la page
    document.title = product.titre + " - GeniArtHub"
    // Changer l'image .detailoeuvre img
    document.querySelector('.detailoeuvre img').src = product.image
    // Changer le alt de l'image .detailoeuvre img
    document.querySelector('.detailoeuvre img').alt = product.titre
    // Changer le titre h1 de la page
    document.querySelector('h1').textContent = product.titre
    // Changer le contenu de la description courte (prendre la description et la tronquer à 200 caractères)
    document.querySelector('article > div > p').textContent = `${product.description.substring(0, 200)}...`

    // changer le prix en prenant le prix de la premiere declinaison 
    document.querySelector('.showprice').textContent = `${product.declinaisons[0].prix} €`

    // Changer le contenu du bouton (.button-buy) en affichant "Buy + shorttitle"
    document.querySelector('.button-buy').textContent = `Buy ${product.shorttitle}`

    // Changer le contenu du h2 en affichant "Description de l'oeuvre : + titre"
    document.querySelector('h2').textContent = `Description de l'oeuvre : ${product.titre}`

    // Changer le contenu de la description longue (aside > p)
    document.querySelector('aside > p').textContent = product.description

    // Récupérer le champ select #format, parcourir les déclinaisons et remplir le champ avec les options
    const select = document.querySelector('#format')
    product.declinaisons.forEach((declinaison, index) => {
        const option = `<option data-index="${index}" value="${declinaison.taille}">Format : ${declinaison.taille}</option>`
        select.insertAdjacentHTML('beforeend', option)
    })

    // Ajouter un eventListener sur le champ select #format
    select.addEventListener('change', (e) => {
        const index = select.options[select.selectedIndex].dataset.index
        document.querySelector('.showprice').textContent = `${product.declinaisons[index].prix} €`
    })
}
// Fonction pour ajouter un produit au panier sur un localStorage en prenant en compte la quantité la taille et le prix, et limiter a 100 le nombre d'element dans le pannier 
function addToCart(){
    

    const select = document.querySelector('#format')
    const index = select.options[select.selectedIndex].dataset.index
    const quantity = document.querySelector('#quantity').value
    const product = {
        id: id,
        image: document.querySelector('.detailoeuvre img').src,
        title: document.querySelector('h1').textContent,
        description: document.querySelector('article > div > p').textContent,
        size: select.value,
        price: document.querySelector('.showprice').textContent,
        quantity: quantity
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart.length < 100){
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        alert('Produit ajouté au panier')
        console.log("Produit ajouté au panier")

    }else{
        alert('Le panier est plein')
    }
}
document.querySelector('.button-buy').addEventListener('click', addToCart)
document.querySelector('.button-buy').addEventListener('click', () => {
console.log(JSON.parse(localStorage.getItem('cart')))
})        
// ont affiche le contenu du localstorage dans la console
    // ont ajoute un event listener sur le bouton buy
    

    // quand le bouton est cliqué, ont crée un local storage pour stocker le pannier et ont crée un objet pour stocker les informations du produit
    // ont crée une variable cart pour stocker les informations du produit dans le local storage
    // ont ajoute le produit dans le panier
    // ont stocke le panier dans le local storage
    // ont affiche une alerte pour dire que le produit a été ajouté au panier
    // ont affiche dans la console que le produit a été ajouté au panier
    // si le panier est plein ont affiche une alerte pour dire que le panier est plein
// au clique du boutton buy ont envois le local storage dans la console
// document.querySelector('.button-buy').addEventListener('click', () => {
//     console.log(JSON.parse(localStorage.getItem('cart')))
// })


// let datas = []

// const url = new URL(window.location.href);
// const id = url.searchParams.get("id");
// console.log(id)


// // async function init() {
// //     if (id) {
// //         datas = await getDatas(id);
// //         console.log(datas)
// //         populatData(); // Appel à populatData une fois les données récupérées
// //     } else {
// //         console.error("L'id n'existe pas, id: ", id);
// //     }
// // }
// async function init(){
//         const datas = await getDatas()
//         populatData(datas)
//         console.log(datas)
//     }
// init(); // Appel de la fonction init pour démarrer le processus

// async function getDatas() {
//     const req = await fetch(`http://localhost:3000/api/products/${id}`);
//     return await req.json();
// }
// // async function getDatas(){
// //     const req = await fetch(`http://localhost:3000/api/products/`)
// //     return await req.json()
// // }


// console.log(getDatas(id));

// function populatData(el){
//     // const el = datas[id]
//     document.title = el.title
//     // for (const el of datas ) {
//     const detailoeuvreElement = document.querySelector(".detailoeuvre");
//     document.querySelector("img").src=el.image
//     document.querySelector("img").alt=el.image
//     document.querySelector("h1").textContent=el.titre
//     document.querySelector("p").textContent=el.description.substring(0, 200)
//     document.querySelector(".showprice").textContent=el.declinaison[0].prix + " €"
//     document.querySelector(".button-buy").textContent=`Buy ${el.shorttitle}`
//     document.querySelector("h2").textContent=`Description de l’oeuvre :  ${el.titre}`
//     document.querySelector(".button-buy").textContent="buy" + el.shorttitle
//     document.querySelector(".aside > p").textContent=el.description
//     const select = document.querySelector("#format")
//     el.declinaison.forEach((declinaison, index) =>{
//         const option = `<option data-index="" value="${declinaison.taille}"> format : ${declinaison.taille}</option>`
//         select.insertAdjacentHTML("beforeend", option)
//     })
//     select.addEventListener("change", (e)=>{
//         const index = select.option[select.selectedIndex].dataset.index
//         document.querySelector(".showprice").textContent=el.declinaison[index].prix + " €"
//     })
//     // }
    
//     // getDatas()
//     // populatData();
//     // 
// }
