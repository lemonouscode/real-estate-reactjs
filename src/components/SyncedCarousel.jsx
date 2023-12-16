import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export const SyncedCarousel = ({villaDetails}) => {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  const settingsForSmallCaro = {
    slidesToShow:5,
    swipeToSlide:true,
    focusOnSelect:true,
    centerMode:true,

    responsive : [{
        breakpoint : 600,
        settings :{
            slidesToShow: 2,
        }
    }],
  }

  return (
    <div>
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
            {villaDetails.carousel_images.map((villa, index)=>(
                <div key={index} className="h-[70vh]">
                    <img
                        src={villa.img_path}
                        alt=""
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
            ))}
        </Slider>

        <div className="mt-5">
            <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...settingsForSmallCaro}
            >
                {villaDetails.carousel_images.map((villa, index)=>(
                    <div key={index} className="h-[15vh]">
                        <img
                            src={villa.img_path}
                            alt=""
                            style={{ objectFit: 'cover', width: '95%', height: '100%' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}
