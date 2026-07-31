function addToCart(button){
    const price= parseInt(button.getAttribute('data-price'));
    let cartTotal= parseInt(localStorage.getItem('cartTotal')) || 0;
    cartTotal += price; 
    localStorage.setItem('cartTotal', cartTotal);
    alert(`Item Added! Cart total: ${cartTotal}E`); 
}
function clearCart() {
    localStorage.removeItem(`cartTotal`);
}

const links= document.querySelectorAll('.faqtoggle');
links.forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();
const answer= this.nextElementSibling; //nextElementSibling grabs the next class right away which 
                                    //would be my faqanswer 

document.querySelectorAll('.faqanswer.show').forEach(a=>
    a.classList.remove('show'));
    answer.classList.add('show');
    })
})