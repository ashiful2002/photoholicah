import Carousel from "react-bootstrap/Carousel";
import { carouselItems } from "../Constants/Index";
function Featured() {
  return (
    <div className="container" id="home">


    
    <div className="container mx-auto" >
      <div className="py-3  flex items-center justify-center ">
        <div className=" border rounded shadow-md">
        <div className="">
          <Carousel fade>
            {carouselItems.map((item) => (
              <Carousel.Item >
                <img src={item.img} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Featured;
