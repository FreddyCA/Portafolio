const menuLista = document.querySelector(".muenu__lista");
const menuAbrir = document.querySelector(".menu__abrir");
const menuCerrar = document.querySelector(".menu__cerrar");
const btnMenuAbrir = document.querySelector('.btn__img-abrir')
const btnMenuCerrar = document.querySelector('.btn__img-cerrar')




btnMenuAbrir.addEventListener("click", () => {
    abrirMenu()    
})
const abrirMenu = () => {
    menuLista.style.visibility = 'visible';
    menuCerrar.style.visibility = 'visible';
    menuAbrir.style.visibility = 'hidden';
}

btnMenuCerrar.addEventListener('click', () => {
    cerrarMenu()
}) 

const cerrarMenu = () => {
    menuLista.style.visibility = 'hidden';
    menuAbrir.style.visibility = 'visible';
    menuCerrar.style.visibility = 'hidden';
}

// window.addEventListener('resize', function() {
//     if (window.innerWidth > 1024) {
//         let estilos = document.getElementById('cabecera__estilos')
//         estilos.href = "estilos.css?" + new Date().getTime();
//     }
// })

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
