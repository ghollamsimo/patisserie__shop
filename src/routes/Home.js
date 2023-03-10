import React from 'react'
import './style/home.css'
import HERO from '../assets/hero.png'
import COOKIES from '../assets/cookies.png'
import CAKE from '../assets/cake.png'
import SAND from '../assets/sand.png'
import BREAD from '../assets/bread.png'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <div className='hero__container'>
      <div className='hero'>
        <h1>The perfecte cake every time!</h1>
        <small>We are company didcated to the preparation of cookies providing our customers with a product always fresh and fresh from the oven</small>
        <div className='button__container'>
          <button className='btn btn__container'>Descover Menu</button>
        </div>
      </div>

      <div className='hero__img'>
        <img src={HERO} alt="" width={500} />
      </div>
      </div>
      <div className='cards'>
      <div className='card'>
        {/* <Link> */}
          <img src={COOKIES} width={200} />
          <h4>Cookies</h4>
          {/* </Link> */}
        </div>

        <div className='card'>
          {/* <Link> */}
          <img src={CAKE} width={200} />
          <h4>Cake</h4>
          {/* </Link> */}
        </div>

        <div className='card'>
          {/* <Link> */}
          <img src={SAND} width={200} />
          <h4>Sandwich</h4>
          {/* </Link> */}
        </div>

        <div className='card'>
          {/* <Link> */}
          <img src={BREAD} width={200} />
          <h4>Bread</h4>
          {/* </Link> */}
        </div>  
      </div>
  </div>
  )
}

export default Home