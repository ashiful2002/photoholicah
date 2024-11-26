import Carousel from "react-bootstrap/Carousel";
;
import { carouselItems } from "../Constants/Index";
function Featured() {
  return (
    <div className="" id="home">
      <Carousel>
        {carouselItems.map((item) => (
          <Carousel.Item>
            <Carousel.Caption>{item.title}</Carousel.Caption>
            <img src={item.img} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Featured;
