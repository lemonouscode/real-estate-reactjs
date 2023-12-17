import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleCarousel = ({children}) => {


  const PrevArrow = ({ className, style, onClick }) => (
    <button style={{...style, left: 0, backgroundColor: 'black', zIndex:20000, height:"50px", width:"50px", borderRadius:"20px" }} onClick={onClick} className={className}>
      <div>back</div>
    </button>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <button style={{...style, right: 0, backgroundColor: 'black', zIndex:20000, height:"50px", width:"50px", borderRadius:"20px" }} onClick={onClick} className={className}>
      <div>back</div>
    </button>
  );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5500,
        cssEase: "linear",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        pauseOnHover: false
    };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}
