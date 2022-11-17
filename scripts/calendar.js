//import msj from "./messages.js"
//Creacion de array de mensajes
//console.log(mensajitos[3]);
let msj = [{
    id: 1,
    dia: 19,
    texto: "No pospongas el despertador."
  },
  {
    id: 2,
    dia: 20,
    texto: "Come dos piezas de fruta."
  },
  {
    id: 3,
    dia: 21,
    texto: "Apaga el movil por una hora."
  },
  {
    id: 4,
    dia: 22,
    texto: " Lee por 10 minutos."
  },
  {
    id: 5,
    dia: 23,
    texto: "Haz ejercicios de movilidad."
  },
  {
    id: 6,
    dia: 24,
    texto: "Escribe una carta a contando tu progreso."
  },
  {
    id: 7,
    dia: 25,
    texto: "Vete a dormir antes."
  },
  {
    id: 8,
    dia: 26,
    texto: "Da un paseo."
  },
  {
    id: 9,
    dia: 27,
    texto: "Disfruta tu canción favorita."
  },
  {
    id: 10,
    dia: 28,
    texto: "Haz algo de ejercicio físico."
  },
  {
    id: 11,
    dia: 29,
    texto: "Cocina algo rico y saludable"
  },
  {
    id: 12,
    dia: 30,
    texto: "Pasa tiempo con gente que quieres."
  },
  {
    id: 13,
    dia: 31,
    texto: "Haz la lista de propositos del año."
  },
  {
    id: 14,
    dia: 1,
    texto: "Escucha tu podcats favorito."
  },
  {
    id: 15,
    dia: 2,
    texto: "Disfruta y recomienda una película."
  },
  {
    id: 16,
    dia: 3,
    texto: "Limpia tu cuarto."
  },
  {
    id: 17,
    dia: 4,
    texto: "Medita 10 minutos."
  },
  {
    id: 18,
    dia: 5,
    texto: "Haz una limpieza de redes sociales."
  },
  {
    id: 19,
    dia: 6,
    texto: "Cocina un postre saludable."
  },
  {
    id: 20,
    dia: 7,
    texto: "Consume dos raciones de verdura."
  },
  {
    id: 21,
    dia: 8,
    texto: "Ten una cita contigo mismo. "
  }
];

msj.forEach((foto, index) => {
  foto.imagen = "images/" + (index + 1) + ".png";
})

//let actualDay = new Date().getDate();
let actualDay = 9;
let actualId = 22;
let calendario = document.querySelector(".calendar");

for (let i = 0; i < 21; i++) {

  if (actualId === msj[i].id) {
    calendario.innerHTML += `
        <div id="caja${i}" class="box">
            <h2 class="text" id="message${i}">${msj[i].texto}</h2>
        </div>
      `;
  } else if (actualId > msj[i].id) {
    calendario.innerHTML += `
        <div id="caja${i}" class="box">
            <p>${msj[i].dia}</p>
            <img class="img" src=${msj[i].imagen} alt="imagen de navidad">
        </div>
      `;
  } else {
    calendario.innerHTML += `
        <div id="caja${i}" class="box">
          <h2>Día ${msj[i].dia}</h2>
        </div>
      `;
  }
};

const cajas = document.querySelectorAll("div");

for (let i = 0; i < actualId - 1; i++) {
  cajas[i].addEventListener("mouseenter", (event) => {
    event.target.innerHTML = `<h2 class="text" id="message${i}">${msj[i].texto}</h2>`;
  })

  cajas[i].addEventListener("mouseleave", (event) => {
    event.target.innerHTML = `
    <p>${msj[i].dia}</p>
    <img class="img" src=${msj[i].imagen} alt="imagen de navidad">
    `;
  })
  /*
  }
  cajas[i].onmouseout = function() {
    cajas[i].innerHTML = `<img class="img" src=${msj[i].imagen} alt="imagen de navidad">`;
  }*/
};
