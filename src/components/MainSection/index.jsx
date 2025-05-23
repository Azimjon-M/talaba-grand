import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";
import "swiper/css/scrollbar";
import "./index.css";

const MainSection = () => {
    return (
        <section className="w-full h-[600px] flex justify-center items-center bg-gray-300">
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
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </section>
    );
};

export default MainSection;
