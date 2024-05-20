import React from 'react'
import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="Banner Image" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={drop_down_icon} alt="Drop Down Icon" />
        </div>
      </div>

      <div className="shop-category-products">
        {all_product.map((item, index)=>{
          if (props.category === item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>

      <div className="shop-category-load-more">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
