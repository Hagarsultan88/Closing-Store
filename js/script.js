let shop = document.getElementById("shop");

let shopItemsData = [{
    id :1,
    name : "Mens Pullover",
    price : 100,
    desc : "fashion",
    image : "images/download(1).jpg"
    },

    {
    id :2,
    name : "T-shirt",
    price : 70,
    desc : "fashion",
    image : "images/download.jpg"
    },

    {
    id :3,
    name : "Womens Pants",
    price : 180,
    desc : "fashion",
    image : "images/OIP(1).jpg"
    },

    {
    id :4,
    name : "Mens Sweatshirt",
    price : 170,
    desc : "fashion",
    image : "images/OIP(2).jpg"
    },

    {
    id :5,
    name : "Womens Sweatshirt",
    price : 150,
    desc : "fashion",
    image : "images/OIP(3).jpg"
    },

    {
    id :6,
    name : "Womens Pullover",
    price : 200,
    desc : "fashion",
    image : "images/OIP(4).jpg"
    },

    {
    id :7,
    name : "Womens Pullover",
    price : 130,
    desc : "fashion",
    image : "images/OIP(5).jpg"

    },

    {
    id :8,
    name : "Mens Pants",
    price : 170,
    desc : "fashion",
    image : "images/OIP.jpg"
    },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML= shopItemsData
    .map((x)=>{
        let { id, name, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="270" height="240" src=${img} alt=""/>
        <div class="details">
        <h3>Product:${name}</h3>
        <h3>Price:$ ${price}</h3>
        <h3>Category:${desc}</h3>
        <button>Add to cart</button>
        <div class= "buttons">
            <i onclick="decrement(${id})" class= "bi bi-dash-lg"></i>
            <div id=${id} class="quantity">
            ${search.item === undefined ? 0 : search.item}
            </div>
            <i onclick="increment(${id})" class= "bi bi-plus-lg"></i>
        </div>        <!--/buttons>
        </div>      <!--/details-->
        </div>         <!--/item-->
        `;
    }).join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id:selectedItem.id,
            item : 1,
        });
    }

    else {
        search.item += 1;
    }

    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data" , JSON.stringify(basket));
};

let decrement = (id) => {

    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if(search === undefined) return 
    
    else if(search.item === 0) return;
    
    else {
        
        search.item -= 1;
    }
    
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !==0);
    //console.log(basket);
    localStorage.setItem("data" , JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=> {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x , y)=> x + y, 0);
    console.log();
};
    
calculation();










