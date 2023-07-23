import React, { useEffect, useState } from 'react'
// import Categories from '../../components/Categories'
import ProductCard from '../../components/ProductCard'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from '../../sidebar';


const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {/* <Categories/> */}
    
    <div class=" mb-4">
      <div class="container py-4">
        <h3 class="text-white mt-2">Mens Wear| Men's Fashion</h3>
        
        <nav class="d-flex mb-2">
          <h6 class="mb-0">
            <a href="index.html" class="text-white-50">Home</a>
            <span class="text-white-50 mx-2"> - </span>
            <a href="products.html" class="text-white-50">Men's Fashion</a>
          </h6>
        </nav>
      </div>
    </div>
  

  
  
  <section class="">
    <div class="container">
      <div class="row">
        <Sidebar/>
       
        <div class="col-lg-9">
          <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
            <strong class="d-block py-2">32 Items found </strong>
            <div class="ms-auto">
              <select id="category"class="form-select d-inline-block w-auto border pt-1">
                <option value="0">All Categories</option>
              
              </select>
              <div class="btn-group shadow-0 border">
                <a href="#" class="btn btn-light" title="List view">
                  <i class="fa fa-bars fa-lg"></i>
                </a>
                <a href="#" class="btn btn-light active" title="Grid view">
                  <i class="fa fa-th fa-lg"></i>
                </a>
              </div>
            </div>
          </header>
          {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading.....</div>
      }

          
            
          <hr />
  
          
          <nav aria-label="Page navigation example" class="d-flex justify-content-center mt-3">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>            
  </section>
  
      
    </div>
  )
}

export default Products