let productos = [
    {id:1, title:"God of War Ragnarok", price: 1000, stock: 3, img: "https://gamestorecuador.com/files/images/productos/1655484530-god-of-war-ragnarok-ps5-pre-orden-0.jpg",},
    {id:2, title:"Elden Ring", price: 1000, stock: 2, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/eldenring11-5c93145ed747e47dfe16451397874446-640-0.jpg",},
    {id:3, title:"GTA V", price: 500, stock: 7, img: "https://media.vandal.net/m/86443/grand-theft-auto-v-202011241432933_1.jpg",},
    {id:4, title:"Dead By Daylight", price: 400, stock: 0, img: "https://dixgamer.com/wp-content/uploads/2021/07/dead-by-daylight-ps5.jpg",},
    {id:5, title:"Stray", price: 500, stock: 0, img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png",},
    {id:6, title:"Rust", price: 350, stock: 0, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/rust11-f371935ce55a1097eb16422770863134-640-0.jpg",},
    {id:7, title:"Red Dead Redemption 2", price: 500, stock: 8, img: "https://estacionplay.com/wp-content/uploads/2021/09/red-dead-redemption.jpg",},
    {id:8, title:"Fifa 23", price: 500, stock: 4, img: "https://sm.ign.com/ign_es/screenshot/default/image003_ksqr.png",},
    ];


productos.forEach((producto) =>{
    const idButton =`add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top" src="${producto.img}" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.title}</h5>
                <div class="precio">
                    <p>${producto.price}</p>
                </div>    
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${idButton}" href="#">Añadir al carrito</a></div>
        </div>
    </div>`;    
});

productos.forEach((producto) =>{
    const idButton =`add-cart${producto.id}`
    document.getElementById(idButton).addEventListener(`click`, () =>{
        console.log(producto.title + " fue "+"Agregado al carrito con exito :).");
    })
});

