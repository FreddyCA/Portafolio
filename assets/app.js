const menu = document.querySelector(".muenu__lista");
const menuAbrir = document.querySelector(".menu__abrir");
const menuCerrar = document.querySelector(".menu__cerrar");
const btnMenuAbrir = document.querySelector('.btn__img-abrir')
const btnMenuCerrar = document.querySelector('.btn__img-cerrar')



btnMenuAbrir.addEventListener("click", () => {
    
    menu.style.display = 'block';
    menuCerrar.style.display = 'inline-block';
    menuAbrir.style.display = 'none';
    
})

const cerrarMenu = () => {
    menu.style.display = 'none';
    
    menuAbrir.style.display = 'inline-block';

    menuCerrar.style.display = 'none';
}

btnMenuCerrar.addEventListener('click', cerrarMenu)

const nav = document.querySelector('.cabecera')



// funcion que indica la redimension de la pantalla
// go();
menu.addEventListener('mouseup', go);

function go(){
    cerrarMenu();
    console.log("hola")
}