// open close cart

var cart = document.querySelector('.cart');
function open_cart (){
    cart.classList.add("active")
}
function close_cart (){
    cart.classList.remove("active")
}

// open & close menu

var menu = document.querySelector('#menu');
function open_menu (){
    menu.classList.add("active")
}
function close_menu (){
    menu.classList.remove("active")
}
// add item in cart

var all_product_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addtocart(id , btn){
    product_cart.push(all_product_json[id])
    btn.classList.add("active")
    console.log(id)
    getcartitems()
}

let count_items = document.querySelector('.count_items');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');
let price_cart_head = document.querySelector('.price_cart_head');

function getcartitems(){

    let total_price = 0;

    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
        <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delet_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `

        total_price += product_cart[i].price
        
    }
    items_in_cart.innerHTML = items_c

    price_cart_head.innerHTML = "$" + total_price

    count_items.innerHTML = product_cart.length
    count_item_cart.innerHTML = `(${product_cart.length}Item in cart)`
    price_cart_total.innerHTML = "$" + total_price
}

function remove_from_cart(index){
    product_cart.splice(index,1)
    getcartitems()

    let addtocartbutton = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addtocartbutton.length; i++) {
        addtocartbutton[i].classList.remove("active");

        product_cart.forEach(product =>{
            if(product.id == i){
                addtocartbutton[i].classList.add("active")
            }
        })
        
    }
}

//back_to_top
let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener("click" , function(){
    window.scrollTo(
        {
            top: 0,
            behavior:"smooth"
        }
    )
})

