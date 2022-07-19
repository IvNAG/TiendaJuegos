let productos = [
    {
        title:'God of War Ragnarok',
        price:10000,
        stock:3,
    },
    {
        title:'Call of Duty MODERN WARFARE® II',
        price:12000,
        stock:5,
    },
    {
        title:'Elden Ring',
        price:8000,
        stock: 0,
    },
    {
        title:'Spider-Man: Remastered',
        price:11000,
        stock:1,
    },
]

const amount = parseInt(prompt('¿Cuanto dinero tiene?'))
const game = parseInt(prompt('1_God of War Ragnarok, 2_ Call of Duty MODERN WARFARE® II, 3_Elden Ring, 4_Spider-Man: Remastered'))


function comprobar (producto) {
    if (producto.price <= amount) {
        if (producto.stock !== 0) {
            alert('El dinero restante es ' + (amount - producto.price))
        } else {
            alert('No hay stock de este videojuego.')
        }
    } else {
        alert('Pago rechazado.')
    }
}


function seleccionar (game) {
    switch (game) {
        case 1:
            comprobar(productos[0])
            break;
        case 2:
            comprobar(productos[1])
            break;
        case 3: 
            comprobar(productos[2])
            break
        case 4:
            comprobar(productos[3])
            break;
    }
}


seleccionar(game)
function ordenarPrecio (obj) {
    let arr = obj.sort((a,b) => a.price  - b.price)
    console.log(arr)
}

ordenarPrecio(productos)