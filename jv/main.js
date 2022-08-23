const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cart-total").innerHTML = carrito.length;

//----------------------------PRODUCTOS-------------------/
// let productos = [
//     {id:1, title:"God of War Ragnarok", price: 1000, stock: 3, img: "https://gamestorecuador.com/files/images/productos/1655484530-god-of-war-ragnarok-ps5-pre-orden-0.jpg",},
//     {id:2, title:"Elden Ring", price: 1000, stock: 2, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/eldenring11-5c93145ed747e47dfe16451397874446-640-0.jpg",},
//     {id:3, title:"GTA V", price: 500, stock: 7, img: "https://media.vandal.net/m/86443/grand-theft-auto-v-202011241432933_1.jpg",},
//     {id:4, title:"Dead By Daylight", price: 400, stock: 0, img: "https://dixgamer.com/wp-content/uploads/2021/07/dead-by-daylight-ps5.jpg",},
//     {id:5, title:"Stray", price: 500, stock: 0, img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png",},
//     {id:6, title:"Rust", price: 350, stock: 0, img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/rust11-f371935ce55a1097eb16422770863134-640-0.jpg",},
//     {id:7, title:"Red Dead Redemption 2", price: 500, stock: 8, img: "https://estacionplay.com/wp-content/uploads/2021/09/red-dead-redemption.jpg",},
//     {id:8, title:"Fifa 23", price: 500, stock: 4, img: "https://sm.ign.com/ign_es/screenshot/default/image003_ksqr.png",},
//     ];

    const fetchData = async () => {
        const products = await fetch('../juegos.JSON')
            .then(res => res.json())
            .then(data =>{
                data.map((producto) =>{
                    const idButton = `add-cart${producto.id}`
                    document.getElementById("seccion-card").innerHTML += `<div class="card">
                            <img src="${producto.img}">
                            <h4>${producto.title}</h4>
                            <a class="btnadd" id="${idButton}" data-id="${producto.id}" onclick="myFunction()" >Añadir Al Carrito</a>
                            <a class="btnview" onclick="verProducto(${producto.id})">Ver producto</a>
                        <div class="precio">
                            <p>$${producto.price}</p>
                        </div>
                    </div>`;
                })
            })
    }

    fetchData();
//-----------------------CARDS-DE-PRODUCTOS-------------------//
// productos.forEach((producto) => {
//     const idButton = `add-cart${producto.id}` 
//     document.getElementById("seccion-card").innerHTML += `<div class="card">
//         <div class="precio">
//             <p>$${producto.price}</p>
//         </div>
//         <img src="${producto.img}">
//         <h4>${producto.title}</h4>
//         <a class="btnadd" id="${idButton}" data-id="${producto.id}" onclick="myFunction()" >Añadir Al Carrito</a>
//         <a class="btnview" onclick="verProducto(${producto.id})">Ver producto</a>
//     </div>`;
// })
//-------------------SWEETALERT-AGREGAR-AL-CARRITO---------------//
const myFunction = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Se ha añadido al carrito de compras.'
      })
}
// ----------------VER-PRODUCTO----------------------//
function verProducto(id){
    const indiceProducto = productos.findIndex((producto) => producto.id === id);
    localStorage.setItem('verProducto', JSON.stringify(productos[indiceProducto]));
    location.href = "producto.html";
}

//-------------------------ACUMULADOR-DEL-CARRITO-NAV--------------------------//
productos.forEach((producto) =>{
    const idButton =`add-cart${producto.id}`
    document.getElementById(idButton).addEventListener(`click`, () =>{
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total =carrito.reduce((acumulador , producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
    })
});




