import React from 'react'
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import './styles.css';
import Filters from './Filters';
const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRaing, sort, searchQuery }
  } = CartState();
  const transformProducts=()=>{
    let sortedProducts=products;
    if(sort){
      sortedProducts=sortedProducts.sort((a,b)=>
      sort==="lowToHigh"?a.price-b.price:b.price-a.price)
    }
    if(!byStock){
      sortedProducts=sortedProducts.filter((prod)=>prod.inStock);
    }
    if(byFastDelivery){
      sortedProducts=sortedProducts.filter((prod)=>prod.fastDelivery)
    }
    if(byRaing){
      sortedProducts=sortedProducts.filter((prod)=>prod.rating>=byRaing)
    }
    if(searchQuery){
      sortedProducts=sortedProducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  }
  return (
    <div className="home">
      <Filters />
      <div className="productContiner">
        {transformProducts().map(prod => {
          return <SingleProduct prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  )
}

export default Home
