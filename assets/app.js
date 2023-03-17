const menuLista = document.querySelector(".muenu__lista");
const menuCerrar = document.querySelector(".menu__cerrar");
const btnMenuCerrar = document.querySelector('.btn__img-cerrar')


const btnMenuAbrir = document.querySelector('.btn__img-abrir')
let ancho = true



window.addEventListener('resize', () => {
    dimension()
    console.log(ancho)
})

const dimension = () => {
    if (window.innerWidth > 1024) {
        menuLista.style.visibility = 'visible';
        return
    } else {
        if (ancho) {
            menuLista.style.visibility = 'hidden';
            menuCerrar.style.visibility = 'hidden';
            btnMenuAbrir.style.visibility = 'visible';
            return
        } else {
            menuLista.style.visibility = 'visible';
            menuCerrar.style.visibility = 'visible';
            btnMenuAbrir.style.visibility = 'hidden';
        }
        
    }
}



btnMenuAbrir.addEventListener("click", () => {
    abrirMenu()
    console.log(ancho)
})
const abrirMenu = () => {
    menuLista.style.visibility = 'visible';
    menuCerrar.style.visibility = 'visible';
    btnMenuAbrir.style.visibility = 'hidden';
    ancho = false;

}

btnMenuCerrar.addEventListener('click', () => {
    cerrarMenu()
}) 

const cerrarMenu = () => {
    menuLista.style.visibility = 'hidden';
    btnMenuAbrir.style.visibility = 'visible';
    menuCerrar.style.visibility = 'hidden';
    ancho = true;
}






// PROBAR CON CAMBIO DE CLASES

// window.addEventListener('resize', () => {
    
//     if (window.screen.width >= 1024 && window.innerWidth >=1024) {
//         // console.log(window.innerWidth)
//         console.log('mas de 1024', window.screen.width, window.innerWidth )  
        
//     } else {
//         // menuLista.addEventListener('mouseup', () => {
//         //     cerrarMenu()
//         // });
//         // console.log(window.innerWidth)
//         console.log('menos de 1024', window.screen.width, window.innerWidth)
//     }
    
// });
