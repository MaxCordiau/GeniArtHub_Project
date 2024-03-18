/*
<article>
    <img src="img/01.png" alt="Titre produit">
    <a href="product.html">Buy bird</a>
</article>
*/

let datas = []


/*

Le code JavaScript ci-dessus définit une fonction asynchrone pour récupérer les données d'un point
de terminaison d'API spécifié et enregistrer les données récupérées sur la console.
*/
async function init(){
    datas = await getDatas()
    console.log(datas)
    populatData()
}
init()

async function getDatas(){
    const req = await fetch('http://localhost:3000/api/products/')
    return await req.json()
}
getDatas()

const populatData = ()=>{
    datas.forEach(el =>{
        document.querySelector(".products").innerHTML+=
        `
        <article>
        <img src=${el.image} alt="${el.titre}">
        <a href="product.html?id=${el._id}">Buy ${el.shorttitle}</a>

        </article>
        `
    })}
