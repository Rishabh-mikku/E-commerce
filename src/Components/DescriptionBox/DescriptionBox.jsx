import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className="description-box-navigator">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet and serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
        <p>E-commerce websites typically display products or services as detailed descriptions, images, prices, and any availabel variants (e.g.. sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
