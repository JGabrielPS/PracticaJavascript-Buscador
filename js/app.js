const resultado = document.querySelector("#resultado");
marca = document.querySelector("#marca");
year = document.querySelector("#year");
precioMin = document.querySelector("#minimo");
precioMax = document.querySelector("#maximo");
puertas = document.querySelector("#puertas");
transmision = document.querySelector("#transmision");
color = document.querySelector("#color");

let datosBusqueda = {
  marca: "",
  year: "",
  precioMinimo: "",
  precioMaximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//funciones
const limpiarHTML = () => {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
};

const mostrarAutos = (autos) => {
  limpiarHTML();

  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    autoHTML.textContent = `
            ${marca} ${modelo} - Modelo: ${year} - ${puertas} puertas - Transmision: ${transmision} - Precio: ${precio} - Color:${color}
        `;
    resultado.appendChild(autoHTML);
  });
};

const llenarSelect = () => {
  const max = new Date().getFullYear();
  min = max - 10;

  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
};

const sinResultado = () => {
  limpiarHTML();

  const mensaje = document.createElement("div");
  mensaje.classList.add("error", "alerta");
  mensaje.textContent =
    "No hay resultados, intenta con otros terminos de busqueda";
  resultado.appendChild(mensaje);
};

const filtrarMarca = (auto) => {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
};

const filtrarYear = (auto) => {
  if (datosBusqueda.year) {
    return auto.year === parseInt(datosBusqueda.year);
  }
  return auto;
};

const filtrarPrecioMin = (auto) => {
  if (datosBusqueda.precioMinimo) {
    return auto.precio >= datosBusqueda.precioMinimo;
  }
  return auto;
};

const filtrarPrecioMax = (auto) => {
  if (datosBusqueda.precioMaximo) {
    return auto.precio <= datosBusqueda.precioMaximo;
  }
  return auto;
};

const filtrarPuertas = (auto) => {
  if (datosBusqueda.puertas) {
    return auto.puertas === parseInt(datosBusqueda.puertas);
  }
  return auto;
};

const filtrarTransmision = (auto) => {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
};

const filtrarColor = (auto) => {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
};

const filtrarAuto = () => {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarPrecioMin)
    .filter(filtrarPrecioMax)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  console.log(resultado);

  if (resultado.length > 0) {
    mostrarAutos(resultado);
  } else {
    sinResultado();
  }
};

//listeners
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);

  llenarSelect();
});

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
});

precioMin.addEventListener("change", (e) => {
  datosBusqueda.precioMinimo = e.target.value;
  filtrarAuto();
});

precioMax.addEventListener("change", (e) => {
  datosBusqueda.precioMaximo = e.target.value;
  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});
