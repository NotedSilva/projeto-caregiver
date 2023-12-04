import React from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Galeria/GaleriaStyles.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Galeria() {

    
    return (
      <div className="container">
        <h1 className="heading">Junte-se à comunidade Caregiver</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          initialSlide={1}
        >
          <SwiperSlide>
            <img src={'https://www.nationalchurchresidences.org/wp-content/uploads/2022/12/iStock-1408692330-scaled.jpg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147486178/settings_images/Q7pzYhASQS2PLgYfkxmV_Copyright2021AHG_CaregiverWithDog.jpg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://www.carelink.org/wp-content/uploads/2021/08/how_to_become_a_caregiver.jpg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/job_description_template/Child_Caregiver.jpg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/2020/Favorites-AnsemSophie1212MW.jpg?h=6db3cedb&itok=dE7UmhOc'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://pascohh.com/wp-content/uploads/2021/06/iStock-1154433276.jpg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'https://supportforfamilies.org/wp-content/uploads/2023/10/Caregiver-and-Child-engaged-in-a-Developmental-Screening.jpg'} alt="slide_image" />
          </SwiperSlide>
          
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    );
  }

  export default Galeria;