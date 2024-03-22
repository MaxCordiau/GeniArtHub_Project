// recuperer le cart dans le localstorage
// :si il y a des element enregistrer dans le pannier ont recuper la quantité et ont l'affiche dans un span qu'ont devra inserer sur cart icone 
const span ="<span>0</span>";
const cartIcone = document.querySelector('#carticon');
cartIcone.insertAdjacentHTML = ("beforeend",span);
function numberItem(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // verifier la quantité de donées dans le local storage
    if (cart.length > 0){
        const quantity = cart.reduce((acc, el) => acc + parseInt(el.quantity), 0);
        document.querySelector('#carticon span').textContent = quantity;
        document.querySelector('#carticon span').style.display = 'flex';
        return 
    }
    document.querySelector('#carticon span').style.display = "none";
}
numberItem();