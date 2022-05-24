
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
        autoPlaySpeed={30000}
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
            <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut optio soluta. Deleniti voluptatem ratione error animi ducimus odit minima facilis esse delectus quas earum distinctio, necessitatibus voluptatum dolore ipsa?</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>


        <div className="banner-item2">
        <div className="item-content">
            <h1 className="lg:text-5xl text-3xl md:text-5xl ">YOUR CAR SAVE OUR HAND !</h1>
            <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut optio soluta. Deleniti voluptatem ratione error animi ducimus odit minima facilis esse delectus quas earum distinctio, necessitatibus voluptatum dolore ipsa?</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>

        <div className="banner-item3">
        <div className="item-content">
            <h1 className="lg:text-5xl text-3xl md:text-5xl ">YOUR CAR SAVE OUR HAND !</h1>
            <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut optio soluta. Deleniti voluptatem ratione error animi ducimus odit minima facilis esse delectus quas earum distinctio, necessitatibus voluptatum dolore ipsa?</p>
            <button onClick={handleNavigate} className="btn btn-primary">SIGN UP NOW</button>
          </div>
        </div>

      </Carousel>
    </section>
  );
};

export default Banner;