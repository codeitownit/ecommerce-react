import React from 'react'
import { Link } from 'react-router-dom'


const Navigations = [
  {
    name:'Home',
    path:'/'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div class="p-3 text-center bg-white border-bottom">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-2 col-sm-2 col-2">
          <Link to={'/'} ><a href="#" target="_blank" class="float-start">
              <img src="#" height="35" />
            </a></Link>
            
          </div>
        <div className="col-lg-5 col-md-10 col-10">
            <div className="float-center">
              <div className="hero__search__form">
                <form action="#">
                    <div className="hero__search__categories">
                        All Categories
                    </div>
                    <input type="text" placeholder="What do you need?" width="50%"></input>
                    <button type="submit" className="site-btn">SEARCH</button>
                </form>
            </div>
            </div>
          </div>   
        <div className="header__cart float-end col-lg-4 col-md-4 col-4">
                  <ul>
                  {/* <Link to={'/'} ><li><a href="#"><i class="fa fa-shopping-bag"></i> <span>1</span></a></li></Link> */}
        <Link to={'/cart'} ><li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li></Link>
                  </ul>
                
              </div>
              </div>
            </div>
    </div>
      
    </header>
  )
}

export default Header