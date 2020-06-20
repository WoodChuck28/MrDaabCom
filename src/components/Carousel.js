import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "./styles/Carousel.css"

const CarouselPage = () => {
  return (
    <MDBContainer class>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="myCarousel"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://3.bp.blogspot.com/-FZnYU3pQlbk/T_6B0GeG6fI/AAAAAAAAEuc/d_JPfy5D5oE/s1600/space+wallpaper+(1).jpeg"
              alt="First slide"
              height="400px"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Welcome all!</h3>
            <p>Thanks for visiting our site.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://www.technocrazed.com/wp-content/uploads/2015/12/HD-Space-Wallpaper-For-Background-2.jpg"
              alt="Second slide"
              height="400px"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Physics</h3>
            <p>This site covers content from AP Physics 1 and 2</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/lkgujv7.jpg"
              alt="Third slide"
              height="400px"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">MD Designs</h3>
            <p>Affordable home decor made custom for you!</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;