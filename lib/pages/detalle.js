import { getOneProduct, getProductInCategory } from "../service/product.js"

const id = new URLSearchParams(window.location.search).get('id')

//Inicializar elentos

const product_image=document.getElementById("product-image")
const product_title=document.getElementById("product-title")
const product_price=document.getElementById("product-price")
const product_description = document.getElementById("tarea-descripcion")
const product_responsable = document.getElementById("product-description")
const productosRelacionadosContainer= document.getElementById('productos-relacionados')

//
const fillProductosRelacionados = async (estado)=>{
    const products = await getProductInCategory(estado)
    products.forEach(product => {
        
        //Crear elemento en la categoria
        productosRelacionadosContainer.innerHTML += `
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
                    <span>${product.tiempo} días restantes</span>
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
//Rellenamos el detalle de product

const fillDetailProduct = async() =>{
    const product = await getOneProduct(id)

    if(product){
        product_image.src=product.foto
        product_title.innerText= product.titulo
        product_price.innerText= `${product.tiempo} Dias`
        product_description.innerText= product.descripcion
        product_responsable.innerText= `Responsable: ${product.responsable} `
        
        //
        fillProductosRelacionados(product.estado)
    }
}

fillDetailProduct()