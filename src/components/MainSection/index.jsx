import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
import './index.css'; // Swiper stil fayli
import fon_1 from '../../assets/fon/carousel/OzbekistonRespublikasiVazirlarMahkamasi.jpg';
import fon_2 from '../../assets/fon/carousel/photo_2.jpg';
import fon_3 from '../../assets/fon/carousel/photo_3.jpg';

const MainSection = () => {
    const slides = [
        {
            image: fon_1,
            title: "O'zbekiston Respublikasi Vazirlar Mahkamasining 149-sonli qaroriga asosan",
            description: "Ushbu Web-sayt o'z ish faoliyatini boshlagan",
        },
        {
            image: fon_2,
            title: "Qo'qon Davlat Unversiteti IT-Park jamoasi tomonidan",
            description: 'Ushbu Web-sayt ishlab chiqilgan',
        },
        {
            image: fon_3,
            title: "Talabalarni rivojlantirish va qo'llab-quvvatlash maqsadida",
            description:
                "Ushbu Web-sayt talabalarga grand ajratish taqsimotini amalga oshirish uchun mo'ljallangan",
        },
    ];

    return (
        <section className="w-full h-[600px] flex justify-center items-center line-gradient dark:bg-gray-900">
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar, Navigation]}
                className="w-full h-full mySwiper"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="relative w-full h-full flex justify-center items-center"
                    >
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={`Fon ${idx + 1}`}
                            className="object-cover w-full h-full absolute inset-0 -z-10"
                        />

                        {/* Slide Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-end lg:justify-end lg:pr-[5%] lg:pb-[5%] z-40 me-20">
                            <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow-lg shadow-black ">
                                {slide.title}
                            </h2>
                            <p className="mt-2 text-md md:text-lg font-semibold text-white text-shadow-lg shadow-black ">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MainSection;
