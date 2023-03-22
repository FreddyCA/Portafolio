const menuLista = document.querySelector(".muenu__lista");
const menuCerrar = document.querySelector(".menu__cerrar");
const btnMenuCerrar = document.querySelector(".btn__img-cerrar");
const btnMenuAbrir = document.querySelector(".btn__img-abrir");
const menuItem = document.querySelectorAll(".menu__item");
let ancho = true;

window.addEventListener("resize", () => {
  dimension();
});
const dimension = () => {
  if (window.innerWidth <= 1024) {
    if (ancho) {
      menuLista.style.visibility = "hidden";
      menuCerrar.style.visibility = "hidden";
      btnMenuAbrir.style.visibility = "visible";
      return;
    } else {
      clickMenuItem(true);
      menuLista.style.visibility = "visible";
      menuCerrar.style.visibility = "visible";
      btnMenuAbrir.style.visibility = "hidden";
    }
  } else {
    menuLista.style.visibility = "visible";
    clickMenuItem(false);
  }
};

btnMenuAbrir.addEventListener("click", () => {
  abrirMenu();
  clickMenuItem(true);
});
const abrirMenu = () => {
  menuCerrar.style.visibility = "visible";
  btnMenuAbrir.style.visibility = "hidden";
  ancho = false;
  animacionMenuActivo();
};

btnMenuCerrar.addEventListener("click", () => {
  cerrarMenu();
});
const cerrarMenu = () => {
  menuLista.style.visibility = "hidden";
  btnMenuAbrir.style.visibility = "visible";
  menuCerrar.style.visibility = "hidden";
  ancho = true;
  clickMenuItem(false);
  animacionMenuDesativo();
};

const lista = document.querySelectorAll(".menu__link");
const menuActivadoClick = () => {
  lista.forEach((navItem) => {
    navItem.addEventListener("click", cerrarMenu);
  });
};
const menuDesactivadoClick = () => {
  lista.forEach((navItem) => {
    navItem.removeEventListener("click", cerrarMenu);
  });
};

const clickMenuItem = (estado) => {
  if (estado) {
    menuActivadoClick();
    menuFueraActivo();
  } else {
    menuDesactivadoClick();
    menuFueraDesactivado();
  }
};

const menuClickFuera = (e) => {
  if (!menuLista.contains(e.target) && !menuCerrar.contains(e.target)) {
    cerrarMenu();
  }
};
const menuFueraActivo = () => {
  document.addEventListener("mouseup", menuClickFuera);
};
const menuFueraDesactivado = () => {
  document.removeEventListener("mouseup", menuClickFuera);
};

const animacionMenuActivo = () => {
  menuItem.forEach((item) => {
    item.classList.add("show__menu-item");
  });
};
const animacionMenuDesativo = () => {
  menuItem.forEach((item) => {
    item.classList.remove("show__menu-item");
  });
};

// contacto

// agarramos a todos los imputs y agreagmos el eventoblur

const inputs = document.querySelectorAll("input")

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        validaEntrada(input.target)
    })
})


const validaEntrada = (input) => {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  console.log(input)

  if (input.validity.valid) {
    input.classList.remove("form__input--invalid")
  } else {
    input.classList.add("form__input--invalid")
  }

};


const mensajesDeErro = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismactch: "No son admitidos carácteres especiales",
    },
    correo: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismactch: "No son admitidos carácteres especiales",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismactch: "No son admitidos carácteres especiales",
    }
}


const validadores = {
    nombre: input => validarNombre(input),
    // correo: input => validarNombre(input),
    asunto: input => validarNombre(input),
    mensaje: input => validarNombre(input),    
}





const inputNombre = document.querySelector("#form__nombre");

inputNombre.addEventListener("blur", (e) => {
  // console.log(e.target)
  validarNombre(e.target);
});

const validarNombre = (input) => {
  const nombre = input.value;
  let mensaje = "";
  if (!cantidadCaracteres(nombre)) {
    mensaje = "no cumple la condicion";
  }
  console.log(mensaje);
  input.setCustomValidity(mensaje);
};

const cantidadCaracteres = (nombre) => {
  return nombre.length > 0 && nombre.length < 50;
};
