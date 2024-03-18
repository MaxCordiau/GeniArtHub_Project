// let datas = []

// const url = new URL(window.location.href);
// const id = url.searchParams.get("id");


// async function init(){
//     if (id) {
//         datas = await getDatas(id);
//     } else {
//         console.error("L'id n'existe pas, id: ", id);
//     }
//     console.log(id)
//     console.log(datas);
//     // populatData();
// }
// // async function init(){
// //     datas = await getDatas()
// //     console.log(datas)
// //     populatData()
// // }
// init()

// async function getDatas(id) {
//     const req = await fetch(`http://localhost:3000/api/products/${id}`);
//     return await req.json();
// }
// // async function getDatas(){
// //     const req = await fetch(`http://localhost:3000/api/products/`)
// //     return await req.json()
// // }
// getDatas()



// const populatData = () => {
//     const detailoeuvreElement = document.querySelector(".detailoeuvre");
//     for (const el of datas) {
//         console.log(el._id);
//         const articleElement = document.createElement("article");
//         articleElement.innerHTML = `
//             <figure>
//                 <img src=${el.image} alt="${el.titre}">
//             </figure>
//             <div>
//                 <h1>${el.titre}</h1>
//                 <p>${el.description}</p>
//                 <div class="price">
//                     <p>Acheter pour</p>
//                     <span class="showprice">${el.declinaisons.prix}</span>
//                 </div>
//                 <div class="declinaison">
//                     <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1">
//                     <select name="format" id="format">
//                     </select>
//                 </div>
//                 <a class="button-buy" href="#">Buy ${el.shorttitle}</a>
//             </div>
//         `;

//         const asideElement = document.createElement("aside");
//         asideElement.innerHTML = `<h2>Description de l’oeuvre : ${el.titre}</h2>`;

//         detailoeuvreElement.appendChild(articleElement);
//         detailoeuvreElement.appendChild(asideElement);
//     }
// }
// populatData();

// // console.log(el._id)

// // const populatData = ()=>{
// //     datas.forEach(el =>{

// //         console.log(el._id)

// //         document.querySelector("img").innerHTML+=`src=${el.image} alt="${el.titre}"`
// //         document.querySelector("h1").innerHTML+=el.titre
// //         document.querySelector("p").innerHTML+=el.description
// //         document.querySelector(".showprice").innerHTML+=el.declinaisons.prix
// //         document.querySelector(".button-buy").innerHTML+=`Buy ${el.shorttitle}`
// //         document.querySelector("h2").innerHTML+=`Description de l’oeuvre :  ${el.titre}`

// //         document.querySelector(".detailoeuvre").innerHTML=
// //         `
// //         <section class="detailoeuvre">
// //         <article>
// //             <figure>
// //                 <img src=${el.image} alt="${el.titre}">
// //             </figure>
// //             <div>
// //                 <h1>${el.titre}</h1>
// //                 <p>${el.description}</p>
// //                 <div class="price">
// //                     <p>Acheter pour</p>
// //                     <span class="showprice">${el.declinaisons.prix}</span>
// //                 </div>
// //                 <div class="declinaison">
// //                     <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1">
// //                     <select name="format" id="format">
// //                     </select>
// //                 </div>
// //                 <a class="button-buy" href="#">Buy ${el.shorttitle}</a>
// //             </div>
// //         </article>
    
// //         <aside>
// //             <h2>Description de l’oeuvre :  ${el.titre}</h2>
// //         </aside>
// //     </section>
// //         `
// //     })}
    


let datas = [];

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

async function init() {
    if (id) {
        datas = await getDatas(id);
        console.log(datas);
        populatData(); // Appel à populatData une fois les données récupérées
    } else {
        console.error("L'id n'existe pas, id: ", id);
    }
}

async function getDatas(id) {
    const req = await fetch(`http://localhost:3000/api/products/${id}`);
    return await req.json();
}

const populatData = () => {
    const detailoeuvreElement = document.querySelector(".detailoeuvre");
    for (const el of datas) {
        console.log(el._id);
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <figure>
                <img src=${el.image} alt="${el.titre}">
            </figure>
            <div>
                <h1>${el.titre}</h1>
                <p>${el.description}</p>
                <div class="price">
                    <p>Acheter pour</p>
                    <span class="showprice">${el.declinaisons.prix}</span>
                </div>
                <div class="declinaison">
                    <input type="number" name="quantity" id="quantity" placeholder="1" value="1" minlength="1">
                    <select name="format" id="format">
                    </select>
                </div>
                <a class="button-buy" href="#">Buy ${el.shorttitle}</a>
            </div>
        `;

        const asideElement = document.createElement("aside");
        asideElement.innerHTML = `<h2>Description de l’oeuvre : ${el.titre}</h2>`;

        detailoeuvreElement.appendChild(articleElement);
        detailoeuvreElement.appendChild(asideElement);
    }
}

init(); // Appel de la fonction init pour démarrer le processus
