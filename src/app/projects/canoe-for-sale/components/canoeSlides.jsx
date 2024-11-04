'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import canoe1 from "../../../../assets/pictures/images/canoe-01.png";
import canoeAccueil from "../../../../assets/pictures/images/canoe-accueil.png";
import canoeLogin from "../../../../assets/pictures/images/canoe-login.png";
import canoeTest from "../../../../assets/pictures/images/canoe-test.png";

export default function CanoeSlides () {
    return (
        <>
            <Swiper
            modules={[Navigation, Mousewheel, Pagination, Scrollbar, A11y]}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            className="mt-10 md:w-10/12">
                <SwiperSlide>
                    <Image src={canoeAccueil} className={"m-auto"} alt="Page d'accueil" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={canoe1} className={"m-auto"} alt="Schéma de la base de données" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={canoeLogin} className={"m-auto"} alt="Page de login" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={canoeTest} className={"m-auto"} alt="Mise en situation d'achat" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}