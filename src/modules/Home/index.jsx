import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../../product';
import background from '../../images/banner.png';





// import Categories from '../../components/Categories'
// // import FeatureCard from '../../components/FeatureCard'
// // import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
// import Products from '../../components/ProductCard'
// import Stats from '../../components/StatCard'

const Navigations = [
 
  {
    name: 'Products',
    path: '/products'
  },
  
  
]
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const productData=[
    {
    id: 1,
    backgroundImage:{png:require("../../images/categories/computing.png")},
    name:"Computing Equipment"
  },
  {
    id: 2,
    imageurl: "",
    name:"Home Appliances"
  },
  {
    id: 3,
    imageurl: `url(${process.env.PUBLIC_URL + '/src/images/categories/mens-fashion.png'})`,
    name:"Mens Clothing"
  },
  {
    id: 4,
    imageurl: "/src/images/categories/womens-clothing.png",
    name:"Womens Clothing"
  },
  {
    id: 5,
    imageurl: "",
    name:"Mobile Phones"
  },
  {
    id: 6,
    imageurl: "",
    name:"Televisions"
  },
  {
    id: 7,
    imageurl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhYnklMjBjbG90aGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name:"Baby Products"
  }
]
const product = productData.map(item =>(
    <Product name={item.name} url={item.imageurl}/>
))
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  

  return (
    <>
      {/* <Hero /> */}
      {/* <Categories/> */}
      <section class="hero">
  <div class="container">
      <div class="row">
          <div class="col-lg-3">
              <div class="hero__categories">
                  <ul>
                  <Link to={'/products'} ><li><a href="#">Home and furniture</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Health and Beauty</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Office Supplies</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Computing</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Fashion</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Phone and Tablets</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Gaming</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">TVs and Audio</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Baby Products</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Sporting Equipment</a></li></Link>
                  <Link to={'/products'} ><li><a href="#">Other categories</a></li></Link>
                  
                  
                  </ul>
              </div>
          </div>

          
          <div class="col-lg-9">
                    
                    <div class="hero__item set-bg" style={{backgroundImage:`url(${background})`}}>
                        <div class="hero__text">
                            <span>BIG SALE</span>
                            <h2>Upto <br />30% off</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="products.html" class="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                  </div>
              </div>            
          </div>
  
</section>

<section class="categories">
    <div class="container">
        <div class="row">
        <Carousel responsive={responsive}>
{product}

</Carousel>
            {/* <OwlCarousel class="categories__slider owl-carousel" loop margin={8} nav>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" data-setbg="images/categories/home-appliances.png">
                        <h5><a href="#">Home Appliances</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" data-setbg="images/categories/womens-clothing.png">
                        <h5><a href="#">Women's Fashion</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" data-setbg="images/categories/phones.png">
                        <h5><a href="#">Phones</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" data-setbg="images/categories/television.png">
                        <h5><a href="#">Televisions</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    
                    <div class="col-lg-3"><img  className="img categories__item set-bg" src= {''}/>
                        <h5><a href="#">Baby Products</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" src={'/home/eve/Ecommerce-App-master/public/images/categories/computing.png'}>
                        <h5><a href="#">Computing</a></h5>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="categories__item set-bg" data-setbg="images/categories/mens-fashion.png">
                        <h5><a href="#">Men's Fashion</a></h5>
                    </div>
                </div>
            </OwlCarousel> */}
        </div>
    </div>
</section>

<div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Products</h2>
                    </div>

                    {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading.....</div>
      }
                    </div>
{/* <Carousel responsive={responsive}>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>

</Carousel>; */}

<div class="col-lg-12">
                    <div class="section-title">
                        <h2>Latest Products</h2>
                    </div>
                    {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading.....</div>
      }
                    </div>
{/* <Carousel responsive={responsive}>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>

</Carousel>; */}


    </>
  )
}

export default Home