
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";
import './Banner.css'

const Banner = () => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/signUp')
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (


    <section className="banner-container">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}>
        <div className="banner-item1">
          <div className="item-content">
            <h1 className="lg:text-5xl text-3xl md:text-5xl ">YOUR CAR SAVE IN OUR HANDS !</h1>
            <p className="py-8">Focus any negotiation on that dealer cost. For an average car, 2% above the dealer's invoice price is a reasonably good deal. A hot-selling car may have little room for negotiation,</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>


        <div className="banner-item2">
        <div className="item-content">
            <h1 className="lg:text-5xl text-3xl md:text-5xl uppercase">Keeping ahead through technology.</h1>
            <p className="py-8">Although a dealer can sell a car below invoice, it's unlikely. If you're buying a car from a dealer, you'll probably pay over the invoice price. Dealers try to sell under invoice only as a matter of last resort,</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>

        <div className="banner-item3">
        <div className="item-content">
            <h1 className="lg:text-5xl text-3xl md:text-5xl uppercase">Everything We Do is Driven By You</h1>
            <p className="py-8">Believe it or not, car dealers actually make very little profit on a new car sale (usually under 8.7 per cent of the vehicle's invoice price goes to the dealer) while the bulk of your hard-earned money goes directly to the manufacturer</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>

      </Carousel>
    </section>
  );
};

export default Banner;