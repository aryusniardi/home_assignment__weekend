import React from 'react'

// Import Components
import {
  Circle1,
  CTA__Button,
  CTA__Image,
  Hero as Hero__Component, 
  Hero__Container, 
  Hero__CTA, 
  Hero__Text_Container,
  ImageBackground,
  ShapeCustom1, 
  ShapeCustom2, 
} from './hero__components'
import { Text } from '../base__components'

// Import Assets
import Astronaut from '../../assets/svg/character/astronaut.svg'
import BackgroundImage from '../../assets/svg/background/background__hero.svg'
import Shape1 from '../../assets/svg/custom_shape/custom_shape__1.svg'
import Shape2 from '../../assets/svg/custom_shape/custom_shape__2.svg'
import Circle from '../../assets/svg/shape/shape__circle.svg'
import Navbar from '../navbar/navbar'

const Hero = ({title, subtitle}) => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero__Component>
        <Hero__Container>
          <Hero__Text_Container>
            <Text title color="white" center uppercase>{title ? title : 'Weekend from home'}</Text>
            <Text subtitle color="white" center italic>{subtitle ? subtitle : "Stay active with a little workout"}</Text>
          </Hero__Text_Container>
          <Hero__CTA>
            <CTA__Image src={Astronaut}/>
            <CTA__Button className="button">
              Let's go
            </CTA__Button>
          </Hero__CTA>
        </Hero__Container>
        <ImageBackground style={{backgroundImage: `url(${BackgroundImage})`}}>
          <ShapeCustom1 src={Shape1} />
          <ShapeCustom2 src={Shape2} />
          <Circle1 src={Circle} />
        </ImageBackground>
      </Hero__Component>
    </React.Fragment>
  )
}

export default Hero