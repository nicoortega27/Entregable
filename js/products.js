const autos="https://japceibal.github.io/emercado-api/cats_products/101.json";

let lista=[];

function agregar(){

    let htmlContentToAppend = "";
    for(let i = 0; i < lista.length; i++){
        let category = lista[i];

            htmlContentToAppend += `
            <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src=" ` + category.image +  ` "alt="product image" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                            <h4 > ` +category.name+ `   ` +category.currency+ `   ` +category.cost+` </h4>
                          <p>`+category.description+` </p>
                    </div>
                    <small clase="text-muted">`+category.soldCount+` Articulos</small>      
                    </div>
</div>
                </div>
            </div>
            `;
        

        document.getElementById("autos").innerHTML = htmlContentToAppend;}
    }

        document.addEventListener("DOMContentLoaded",()=>{
            getJSONData(autos).then(function(resultObj){
            if (resultObj.status === "ok"){
                lista= resultObj.data.products;
                agregar(lista);
            }
        })
        })



 