//Importaciones
import { getAllProducts } from "../service/product.js"

//Instancias de elementos

const contenedor_porHacer = document.getElementById("contenedor-porHacer")
const contenedor_enProduccion = document.getElementById("contenedor-enProduccion")
const contenedor_porTestear = document.getElementById("contenedor-porTestear")
const contenedor_completada = document.getElementById("contenedor-completada")


const fillProducts = async()=>{
    const products = await getAllProducts()
    products.forEach(product => {
        const estado = product.estado
        let container;
        if (estado === "porHacer"){
            container = contenedor_porHacer
        }else if(estado === "enProduccion" ){
            container = contenedor_enProduccion
        }else if(estado === "porTestear" ){
            container = contenedor_porTestear
        }else if(estado === "completada" ){
            container = contenedor_completada
        }
        container.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img
                style="min-height: 300px; max-height: 300px" 
                class="card-img-top"
                src="${product.foto}" 
                alt="">
                <div class="card-boody p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">${product.titulo}</h5>
                    <span>${product.tiempo} dias</span>
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center d-flex gap-1 justify-content-center">
                    <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">
                      Ver mas
                    </a>
                    <a href="" class="btn btn-outline-success mt-auto">
                      Completada
                    </a>
                  </div>
                </div>
              </div>

            </div>
            `
    });
}
fillProducts()