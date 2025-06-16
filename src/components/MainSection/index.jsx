import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";
import "swiper/css/scrollbar";
import "./index.css";
import fon_1 from "../../assets/fon/carousel/photo_1.jpg";
import fon_2 from "../../assets/fon/carousel/photo_2.jpg";
import fon_3 from "../../assets/fon/carousel/photo_3.jpg";

const MainSection = () => {
    const data = [fon_1, fon_2, fon_3];
    return (
        <section className="w-full h-[600px] flex justify-center items-center line-gradient">
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar, Navigation]}
                className="w-full h-full mySwiper"
            >
                {data.map((item, idx) => (
                    <SwiperSlide
                        key={idx+1}
                        className="flex justify-center items-center -z-20"
                    >
                        <img
                            src={item}
                            alt="Fon"
                            className="object-cover w-full h-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MainSection;
