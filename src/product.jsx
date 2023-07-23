import React from "react";

export default function Product(props){
    return(
        <div className="card">
    <div className="product--image">
        
    <img alt="" className="" src={props.url} style={{backgroundRepeat:"no-repeat", backgroundSize:"cover"}}/>
    </div>
    <hr />
    <h2>{props.name}</h2>
    
  </div>
  

  // <div className="card">
  //   {
  //     products.map((product) => {
  //       console.log(product, 'product')
  //       const { id, title, price, description, category, image } = product;
  //       return (
  //         <div className="product--image">
  //         <Link to={`/products/${id}`} className="lg:w-[23%] md:w-1/2 p-4 w-full cursor-pointer rounded-lg shadow ml-4">
  //           <a className="block relative h-48 rounded overflow-hidden">
  //             <img alt={title} className="product--image object-contain object-center w-full h-full block" src={image} />
  //           </a>
           
  //             <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
             
  //             <p className="mt-1 text-md font-semibold">${price}</p>
            
  //         </Link></div>
  //       )
  //     })
  //   }
  // </div>

    )
}