'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dgt1 from "../../../assets/pictures/images/dgt-00.png";
import dgt2 from "../../../assets/pictures/images/dgt-01.png";
import dgt3 from "../../../assets/pictures/images/dgt-02.png";
import dgt4 from "../../../assets/pictures/images/dgt-03.png";
import dgt5 from "../../../assets/pictures/images/dgt-05.png";
import dgt6 from "../../../assets/pictures/images/dgt-04.png";
import dgt7 from "../../../assets/pictures/images/dgt-06.png";

export default function DgtSlides() {
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
            <Image src={dgt1} alt="L'accueil du SaaS" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt2} alt="Le formulaire de création de projet" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt3} alt="L'interactivité avec JS : bouton off" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt4} alt="L'interactivité avec JS : bouton on" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt5} alt="Tableau de tous les points de suivi" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt6} alt="Formulaire de paramétrage des points de suivi" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={dgt7} alt="Page d'édition des concentrations des micropolluants" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }