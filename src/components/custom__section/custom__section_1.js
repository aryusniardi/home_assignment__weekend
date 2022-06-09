import React from "react"

// Import Assets
import Astronaut from '../../assets/svg/character/astronaut.svg'
import CustomShape from '../../assets/svg/custom_shape/custom_shape__3.svg'
import { Container, Spacer, Image, SectionComponent as Section } from "../base__components"
import { ImageSection, Text, SpanText } from "./custom__section_components"

const CustomSection1 = () => {
  const desc = "Deffinition; a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary."
  const firstWord = desc.split(" ")[0]
  const rest = firstWord ? desc.split(' ').slice(1).join(' ') : desc
  return (
    <React.Fragment>
      <Section>
        <ImageSection justifyContent='flex-end'>
          <Image height={158} rotateLeft rightValue={1} zIndex={2}  src={Astronaut}/>
          <Image height={158} absolute right src={CustomShape}/>
        </ImageSection>
        <Container>
          <Text>
            {firstWord ? <SpanText>{firstWord}&nbsp;</SpanText>: ''}
            {rest}
          </Text>
          <Spacer lg/>
          <Text color="white" bold italic>
            -weekend team
          </Text>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default CustomSection1