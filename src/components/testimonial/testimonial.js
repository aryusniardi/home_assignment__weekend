import React, { useState, useEffect } from 'react';

// import components
import {Spacer, Container, Text, Image} from '../base__components' 
import {
  Testi,
  Card as TestimonyCard
} from './testimonial__component'
import Loader from '../loader/loader'

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Data
import {index} from '../../api/testimonial__api'

// Import Assets
import Circle from '../../assets/svg/shape/shape__circle.svg'

const Testimonial = () => {
  const [data, setData] = useState()

  const getData = async() => {
    const res = await index()
    setData(res)
  }

  useEffect(() => {
    getData()
    
  }, [])

  
  if (!data) {
    return <Loader />
  }
  
  return (
    <React.Fragment>
      <Testi style={{position: 'relative'}}>
        <Image src={Circle} height={89} width={89} top leftValue={20} style={{marginBottom: '-30px', zIndex: '-1'}}/>
        <Container>
          <Text section color="white" center>Testimonial</Text>
          <Spacer lg/>
          <Swiper
            slidesPerView={"auto"}
            loop={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
          >
            {data.map(item => (
              <SwiperSlide key={item.id} style={{width: 'fit-content'}}>
                <TestimonyCard id={item.id}>
                  <Text color='black' section>
                    {item.by}
                  </Text>
                  <Spacer md/>
                  <Text color='black' small>
                    {item.testimony}
                  </Text>
                </TestimonyCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Testi>
    </React.Fragment>
  )
};

export default Testimonial