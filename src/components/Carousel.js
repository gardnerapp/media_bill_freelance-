import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img/kushagra-kevat-8cYwYgasSis-unsplash.jpg"
import img2 from "./img/adam-whitlock-I9j8Rk-JYFM-unsplash.jpg"
import img3 from "./img/grace-ho-zej4HPQLR5o-unsplash.jpg"
import "../style/myCarousel.css"

function MyCarousel() {
    return (
       <div className="carouselContainer">
           <Carousel>

               <Carousel.Item>
                   <img className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    style={{height: 650, borderRadius: 0}}/>
               </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    style={{height: 650, borderRadius: 0}}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    style={{height: 650, borderRadius: 0}}/>
            </Carousel.Item>


           </Carousel>
       </div>
    )
}

export default MyCarousel;