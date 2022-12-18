import React, { Component } from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slidebar.css";

export default class Sliderbar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="mainslide1">
        <Slider {...settings}>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee95638-21fd-1706-4569-ed42430fd716/original/Sriracha-chicken-spreadsTIle-image.jpg" alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/45/inthenews_62aae4c4d8331" alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/91222c8d-38b5-ed3f-b845-3c732cef4ed5/original/Chunky-Creamy-Tomato-Egg---Bottle.jpg" alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e"alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4"alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/03fe83f5-807d-a6fb-78e2-c2a3e4206790/original/Oriental-Combo-pack-.jpeg"alt="img"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/38/inthenews_62aae10540001"alt="img"/>
          </div>
          {/* <div className="imgslide">
         <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/vm/bff19df0-2aed-4d27-a5d0-8e8bb7504847.png"alt="img"/>
          </div> */}
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/902b95dc-342c-496f-de0c-8bec9be3613f/original/1599039295.0495--2020-09-0215_04_55--472.jpeg"alt="img"/>
          </div>
        </Slider>
      </div>
    );
  }
}