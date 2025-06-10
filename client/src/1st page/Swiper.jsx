import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MySwiper() {
    return(
        <div style={{ width: '80%', margin: '0 auto' }}>
        <Swiper loop={true} spaceBetween={10} slidesPerView={3}>
          <SwiperSlide>
            <div style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
              <h2>Slide 1</h2>
              <p>Ramesh CSE 3rd year</p>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div style={{ padding: '1rem', background: '#d0f0d0', textAlign: 'center' }}>
              <h2>Slide 2</h2>
              <p>Ramu CSE 4th year</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div style={{ padding: '1rem', background: '#f0d0d0', textAlign: 'center' }}>
          <h2>Slide 3</h2>
          <p>Ravi CSE 2nd year</p>
      </div>
        <SwiperSlide>
            <div style={{ padding: '1rem', background: '#d0d0f0', textAlign: 'center' }}>
              <h2>Slide 4</h2>
              <p>Mohan CSE 1st year</p>
            </div>
          </SwiperSlide>
        </div>

    );
}
