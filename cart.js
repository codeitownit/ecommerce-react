

    let products = [];

    function toShort(str,max=50){

        if(str.length > max){
            return  str.substring(0,max)+"....."
        }

        return str;

    }

    function toShow(x){
        $("#products").empty();
        x.map(product=> {
            $("#products").append(`
            <div class="">
              <div class="card w-100 my-2 shadow-2-strong">
                <a href="single-product.html">
                <img src="${product.image}" class="product-image card-img-top" />
                </a>
                <div class="card-body d-flex flex-column">
                  <div class="d-flex flex-row">
                    <h5 class="product-price mb-1 me-1">${product.price}</h5>
                    <span class="text-danger"><s>$49.99</s></span>
                  </div>
                  <p class="card-text">${product.title}</p>
                  <small class="text-black-50">
                     ${toShort(product.description, 120)}
                     </small>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn add-to-cart btn-primary shadow-0 me-1" data-id="${product.id}">
                    Add to cart</a>
                    <a href="#!" class="btn btn-light border icon-hover px-2 pt-2"><i class="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>

           

            `)
        })
    }

    function cartTotal(){

        let count = $(".item-in-cart-cost").length;

        $(".item-in-cart-count").html(count);


        if(count>0){
            let totalCost = $(".item-in-cart-cost").toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y));
            // console.log(typeof totalCost);
            $(".total").cart.html(`

                <div class="d-flex justify-content-between font-weight-bold px-3">
                    <h4>Total</h4>
                    <h4>$ <span class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
                </div>

            `)
        }else{
            $(".total").html("empty cart")
        }

    }



    $.get("https://fakestoreapi.com/products/",function (data) {
        products = data;
        toShow(products);
    })

    $("#search").on("keyup",function () {
        let keyword = $(this).val().toLowerCase();
        // $(".product").filter(function () {
        //
        //     $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);
        //
        // });

        console.log();

        if(keyword.trim().length){

            let filterProducts = products.filter(product=>{
                if(product.title.toLowerCase().indexOf(keyword) > -1 || product.description.toLowerCase().indexOf(keyword) > -1 || product.price == keyword){
                    return product;
                }
            })

            toShow(filterProducts);
        }

    });

    $.get("https://fakestoreapi.com/products/categories",function (data) {
        data.map(cat => $("#category").append(`<option value="${cat}">${cat}</option>`))
    })

    $("#category").on("change",function () {

        let selectedCategory = $(this).val();
        console.log(typeof selectedCategory);

        if(selectedCategory != 0){
            let filterProducts = products.filter(product=>{
                if(product.category === selectedCategory){
                    return product;
                }
            })

            toShow(filterProducts);
        }else{
            toShow(products);
        }
    })



    $("#products").delegate(".add-to-cart","click",function () {
        let currentItemId = $(this).attr("data-id");

        let productInfo = products.filter(el=>el.id == currentItemId)[0];

        if($(".item-in-cart").toArray().map(el=>el.getAttribute("data-id")).includes(currentItemId)){

            alert("Already Added")

        }else{

            $("#cart").append(`
            <div class="card">
            
            <div class="card-body">
             
              <div class="row">
                <div class="col-lg-3 col-md-12 mb-lg-0">
                 
                  <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src="${productInfo.image}"
                      class="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                      <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                    </a>
                  </div>
                  
                </div>
  
                <div class="col-lg-5 col-md-6 mb-lg-0">
                  
                  <p><strong>${productInfo.title}</strong></p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <button type="button" class="btn remove-btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                    title="Remove item">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                    title="Move to the wish list">
                    <i class="fas fa-heart"></i>
                  </button>
                  
                </div>
  
                <div class="col-lg-4 col-md-6 mb-lg-0">
              
                  <div class="d-flex mb-4" style="max-width: 300px">
                    <button class="btn btn-primary px-3 me-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
  
                    <div class="form-outline">
                      <input id="form1" min="1" name="quantity" value="1" unitPrice="${productInfo.price}"type="number" class="form-control" />
                      <label class="form-label" for="form1">Quantity</label>
                    </div>
  
                    <button class="btn btn-primary px-3 ms-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  
  
                 
                  <p class="text-start text-md-center">
                    <strong><p class="mb-0">$ <span class="item-in-cart-cost">${productInfo.price}</span></p></strong>
                  </p>
                 
                </div>
              </div>
           
  
              <hr class="my-4" />
  
              
            
                              </div>
          </div>


          
        `);

        }

        cartTotal();

    })

    $("#cart").delegate(".remove-from-cart","click",function () {

        $(this).parentsUntil("#cart").remove();
        cartTotal();

    })

    $("#cart").delegate(".quantity-plus","click",function () {

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("unitPrice");
        let newQ = Number(q)+1;
        let newCost = p * newQ;
        // console.log(p);
        $(this).siblings(".quantity").val(newQ);
        $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        cartTotal();
    })

    $("#cart").delegate(".quantity-minus","click",function () {

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("unitPrice");
        if(q>1){

            let newQ = Number(q)-1;
            let newCost = p * newQ;
            // console.log(p);
            $(this).siblings(".quantity").val(newQ);
            $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
            cartTotal();

        }

    })

    $("#cart").delegate(".quantity","keyup change",function () {

        let q =$(this).val();
        let p = $(this).attr("unitPrice");
        if(q>1){

            let newQ = Number(q);
            let newCost = p * newQ;
            // console.log(p);
            $(this).val(newQ);
            $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
            cartTotal();

        }else{
            alert("more than one");
        }

    })



