import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  console.log(id, 'id', product)

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      console.log(data)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  const handleCart = (product, redirect) => {
    console.log(product)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id)
    if(isProductExist) {
      const updatedCart = cart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
    }
    alert('Product added to cart')
    if(redirect) {
      navigate('/cart')
    }
  }

  if(!Object.keys(product).length > 0) return <div>Loading.....</div>
  
  return (
      <div>
      <div class="mb-4">
      <div class="container py-4">

        <nav class="d-flex">
          <h6 class="mb-0">
            <a href="index.html" class="text-white-50">Home</a>
            <span class="text-white-50 mx-2"> -</span>
            <a href="products.html" class="text-white-50">Product category</a>
            <span class="text-white-50 mx-2"> - </span>
            <a href="#" class="text-white"><u>Product name</u></a>
          </h6>
        </nav>
      </div>
    </div>
    <section class="py-4">
        <div id="single-product" class="container">
          <div class="row gx-4">
            <aside class="product col-lg-4">
              <div class="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="#">
                  <img alt={product?.title} class="product-image rounded-4 fit" src={product?.image} />
                </a>
              </div>
              
            </aside>
            <main class="item product col-lg-4">
              <div class="ps-lg-3">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
                <h4 class="item-name title text-dark">
                  {product?.title}
                </h4>
                <div class="d-flex flex-row my-3">
                  <div class="text-warning mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span class="ms-1">
                      4.5
                    </span>
                  </div>
                  <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                  <span class="text-success ms-2">In stock</span>
                </div>

                <div class="mb-3">
                  <span class="item-price h5">{product?.price}</span>
                  <span class="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                  men.
                </p>
                <hr />

                <div class="row">
                  <div class="col-md-4 col-6">
                    <label class="mb-2">Size</label>
                    <select class="form-select border border-secondary" >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>

                  <div class="col-md-4 col-6 mb-3">
                    <label class="mb-2 d-block">Quantity</label>
                    <div class="input-group mb-3" >
                      <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                        <i class="fas fa-minus"></i>
                      </button>
                      <input type="text" class="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" class="btn btn-warning shadow-0" onClick={() => handleCart(product, true)}>Buy it now</a>
                <a href="#" class="btn add-to-cart btn-light border shadow-0" id="button-addon2" onClick={() => handleCart(product)}> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                <a href="#" class="favorite btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> </a>
              </div>
            </main>


            <aside class=" col-lg-4">
              <div class="px-0 border rounded-2 shadow-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Seller Information</h5>
                    <hr></hr>

                    <p>Seller Info</p>
                    <div class="d-flex mb-3">
                      <div>
                        <b>MiracleQiji-COD</b> <br></br>
                        86% seller score <br></br>
                        26 followers<br></br>
                      </div>
                    </div>
                    <button class="btn follow btn-light" type="button" id="button-addon2" data-mdb-ripple-color="dark">Follow</button>
                    <hr></hr>
                    <p>Seller Performance</p>
                    <div class="d-flex mb-3">
                      <ul class="list-unstyled ">
                        <li><i class="fas fa-check text-success me-2"></i>Order Fulfillment Rate: Excellent</li>
                        <li><i class="fas fa-check text-success me-2"></i>Quality Score: Good </li>
                        <li><i class="fas fa-check text-success me-2"></i>Customer Rating: Average</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </aside>
            </div>

        </div>
</section>
        <section class="bg-light border-top py-4">
    <div class="container">
      <div class="row gx-4">
        <div class="col-lg-8 mb-4" style={{backgroundColor:'white'}}>
          <div class="border rounded-2 px-3 py-2 bg-white">
            
            <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li class="nav-item d-flex" role="presentation">
                <a class="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
              </li>
              <li class="nav-item d-flex" role="presentation">
                <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
              </li>
              <li class="nav-item d-flex" role="presentation">
                <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
              </li>
              <li class="nav-item d-flex" role="presentation">
                <a class="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
              </li>
            </ul>
            
            <div class="tab-content" id="ex1-content">
              <div class="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                <p>
                  With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <div class="row mb-2">
                  <div class="col-12 col-md-6">
                    <ul class="list-unstyled mb-0">
                      <li><i class="fas fa-check text-success me-2"></i>Some great feature name here</li>
                      <li><i class="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i class="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                      <li><i class="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                    </ul>
                  </div>
                  <div class="col-12 col-md-6 mb-0">
                    <ul class="list-unstyled">
                      <li><i class="fas fa-check text-success me-2"></i>Easy fast and ver good</li>
                      <li><i class="fas fa-check text-success me-2"></i>Some great feature name here</li>
                      <li><i class="fas fa-check text-success me-2"></i>Modern style and design</li>
                    </ul>
                  </div>
                </div>
                <table class="table border mt-3 mb-2">
                  <tr>
                    <th class="py-2">Display:</th>
                    <td class="py-2">13.3-inch LED-backlit display with IPS</td>
                  </tr>
                  <tr>
                    <th class="py-2">Processor capacity:</th>
                    <td class="py-2">2.3GHz dual-core Intel Core i5</td>
                  </tr>
                  <tr>
                    <th class="py-2">Camera quality:</th>
                    <td class="py-2">720p FaceTime HD camera</td>
                  </tr>
                  <tr>
                    <th class="py-2">Memory</th>
                    <td class="py-2">8 GB RAM or 16 GB RAM</td>
                  </tr>
                  <tr>
                    <th class="py-2">Graphics</th>
                    <td class="py-2">Intel Iris Plus Graphics 640</td>
                  </tr>
                </table>
              </div>
              <div class="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                Tab content or sample information now <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </div>
              <div class="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                Another tab content or sample information now <br />
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </div>
              <div class="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                Some other tab content or sample information now <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </div>
            </div>
            


              </div>
            </div>
            <div class="col-lg-4">
              <div class="px-0 border rounded-2 shadow-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Similar items</h5>
                    <div class="d-flex mb-3">
                      <a href="#" class="me-3">
                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" class="img-md img-thumbnail" />
                      </a>
                      <div class="info">
                        <a href="#" class="nav-link mb-1">
                          Rucksack Backpack Large <br />
                          Line Mounts
                        </a>
                        <strong class="text-dark"> $38.90</strong>
                      </div>
                    </div>

                    <div class="d-flex mb-3">
                      <a href="#" class="me-3">
                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" class="img-md img-thumbnail" />
                      </a>
                      <div class="info">
                        <a href="#" class="nav-link mb-1">
                          Summer New Men's Denim <br />
                          Jeans Shorts
                        </a>
                        <strong class="text-dark"> $29.50</strong>
                      </div>
                    </div>

                    <div class="d-flex mb-3">
                      <a href="#" class="me-3">
                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" class="img-md img-thumbnail" />
                      </a>
                      <div class="info">
                        <a href="#" class="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                        <strong class="text-dark"> $120.00</strong>
                      </div>
                    </div>

                    <div class="d-flex">
                      <a href="#" class="me-3">
                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" class="img-md img-thumbnail" />
                      </a>
                      <div class="info">
                        <a href="#" class="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                        <strong class="text-dark"> $339.90</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
            )
            }

            export default Product