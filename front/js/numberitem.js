// recuperer le cart dans le localstorage
// :si il y a des element enregistrer dans le pannier ont recuper la quantité et ont l'affiche dans un span qu'ont devra inserer sur cart icone 
const span ="<span>0</span>";
const cartIcone = document.querySelector('#carticon');
cartIcone.insertAdjacentHTML = ("beforeend",span);