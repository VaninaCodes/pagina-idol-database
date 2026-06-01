//array
const idols = [
    {id: 1, nombre: "Wonhee", era:"Super Real Me", imagen: "https://i.pinimg.com/736x/14/21/8b/14218b1f05dcda2fb492d9c1751f05af.jpg"},
    {id: 2, nombre: "Moka", era:"BOMB", imagen: "https://i.pinimg.com/736x/f5/79/d1/f579d13b13dfb8dc64fa88313c76fff3.jpg"},
    {id: 3, nombre: "Sunghoon", era:"Romance : Untold", imagen: "https://i.pinimg.com/736x/7e/78/4c/7e784c67f5f0bdda5aba6185bc7d4265.jpg"},
    {id: 4, nombre: "Jungwon", era:"Dimension : Answer", imagen: "https://i.pinimg.com/736x/7c/a4/16/7ca416b44ca01ad16c6a7255eed08385.jpg"},
    {id: 5, nombre: "Sunoo", era:"Dimension: Dilemma", imagen: "https://i.pinimg.com/736x/c0/f4/3c/c0f43cc46b04efda80a9bd0ce6556d67.jpg"},
    {id: 6, nombre: "V", era:"Love Yourself: Tear", imagen: "https://i.pinimg.com/736x/06/06/6f/06066f4d4a980769242aa26945b4995a.jpg"},
    {id: 7, nombre: "Jungkook", era:"Love Yourself: Tear", imagen: "https://i.pinimg.com/736x/af/0b/4b/af0b4bea858c4ff29b36d6852f6721d1.jpg"},
];

// Renderizado de cards
const btnVer = document.querySelector(".btn-ver")
const rowGaleria = document.querySelector("#rowGaleria")

const cargarIdols = (arregloIdols) => {
    rowGaleria.innerHTML = ""

    arregloIdols.forEach(idol => {
        rowGaleria.innerHTML += `
        <div class="col-3 my-2" data-id=${idol.id}>
          <div class="card h-100 w-100">
            <img
              src=${idol.imagen}
              class="card-img-top"
              alt=${idol.nombre}
              style="height: 150px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">${idol.nombre}</h5>
              <p class="card-text">${idol.era}</p>
              <button type="button" class="btn btn-danger btn-eliminar"  data-id="${idol.id}" >Eliminar</button>
            </div>
          </div>
        </div>
        `
    });
};

btnVer.addEventListener("click", () => {
    cargarIdols(idols)
})