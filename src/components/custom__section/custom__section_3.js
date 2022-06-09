import React from "react"

// Import Assets
import Astronaut from '../../assets/svg/character/astronaut.svg'
import CustomShape from '../../assets/svg/custom_shape/custom_shape__5.svg'
import { Container, Spacer, Text, Image, SectionComponent as Section} from "../base__components"
import { ImageSection} from "./custom__section_components"

const CustomSection3 = ({title, desc}) => {
  return (
    <React.Fragment>
      <Section background="black" height={290} style={{position: 'relative'}}>
        <Container>
          <Text section center color={"white"}>{title ? title : "You’re all set."}</Text>
          <Spacer md />
          <Text center color="white">{desc ? desc : "The wise man therefore always holds in these matters to this principle of selection."}</Text>
        </Container>
        <ImageSection absolute>
          <Image height={158} absolute upsideDown leftValue={2} zIndex={2} src={Astronaut} style={{marginTop: '-30px'}}/>
          <Image height={290} absolute left toBlock src={CustomShape}/>
        </ImageSection>
      </Section>
    </React.Fragment>
  )
}

export default CustomSection3