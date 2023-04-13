class lapiz{
    #marca
    constructor({
        color = "#b34cb3",
        dimension = 19,
        marca = "Norma",
        borrador = true,
        material = "Madera"
    }){
    this.color = color;
    this.dimension = dimension;
    this.#marca = marca;
    this.borrador = borrador;
    this.material = material;
    }
    getColor(){
        return this.color
    }
    getDimension(){
        return this.dimension
    }
    getMarca(){
        return this.#marca
    }
    getBorrador(){
        return this.borrador
    }
    getMaterial(){
        return this.material
    }
    obtener(){
        const color = document.querySelector(`[name="color"]`).value;
        const dimension = document.querySelector("#value").textContent;
        const marca = document.querySelector(`[name="marca"]:checked`).value;
        const borrador = document.querySelector(`[name="borrador"]:checked`).value === "true";
        const material = document.querySelector(`[name="material"]:checked`).value;
        return new lapiz({
            color,
            dimension,
            marca,
            borrador,
            material
        }) 
    }
}
const color = document.querySelector(`[name="color"]`);
const dimension = document.querySelector("#value");
const marca = document.querySelector(`[name="marca"]`);
const borrador = document.querySelector(`[name="borrador"]`);
const material = document.querySelector(`[name="material"]`);
addEventListener("DOMContentLoaded", (e)=>{
    let obj = new lapiz({});
    color.value = obj.getColor();
    dimension.value = obj.getDimension();
    document.querySelector(`[name="marca"][value=${obj.getMarca()}]`).checked = true;
    document.querySelector(`[name="borrador"][value=${obj.getBorrador()}]`).checked = true;
    document.querySelector(`[name="material"][value=${obj.getMaterial()}]`).checked = true; 
})

const table = document.querySelector("table");
const form = document.querySelector("#form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newLapiz = new lapiz({}).obtener();
    //insertRow es una función de js
    const row = table.insertRow();
    //insertCell() también es una función de js
    const celdaColor = row.insertCell();
    celdaColor.textContent = newLapiz.getColor();
    celdaColor.style.backgroundColor = newLapiz.getColor();
    row.insertCell().textContent = newLapiz.getDimension();
    row.insertCell().textContent = newLapiz.getMarca();
    row.insertCell().textContent = newLapiz.getBorrador() ? "Tiene" : "No tiene";
    row.insertCell().textContent = newLapiz.getMaterial();
})




//Barra value
const value = document.querySelector("#value");
const input = document.querySelector(`[name="dimension"]`);
value.textContent = input.value;
input.addEventListener("input", (e)=>{
    value.textContent = e.target.value
})