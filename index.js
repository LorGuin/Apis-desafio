function mostrarResultados(results){
const contenedor = document.querySelector(".results");
const template = document.querySelector("#result-item-template");
//console.log(results);

for(const r of results) {
    console.log(r);
const titleEl = template.content.querySelector(".result-item-title");
titleEl.textContent = r.title;

const conditionEl = template.content.querySelector(".result-item-condition");
conditionEl.textContent = "2";

const precioEl = template.content.querySelector(".result-item-price");
precioEl.textContent = "$" + r.price;

const ventasAnterior = template.content.querySelector(".result-item-sell-count-num");
ventasAnterior.textContent = r.sold_quantity;

const imgEl = template.content.querySelector(".result-item-img");
imgEl.src = r.thumbnail;

const clone = document.importNode(template.content, true);
contenedor.appendChild(clone)
 }
}



function main(){
const formEl = document.querySelector(".search-form");
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const palabraABuscar = e.target.buscar.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
    .then((response) => response.json())
    .then((data) => mostrarResultados(data.results));
});
}

main();