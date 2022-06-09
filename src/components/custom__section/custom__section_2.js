import React, { useState, useEffect } from "react"

// Import Components
import { ArrowButton, Card, CardButton, CardDescription, CardFooter, Container, Section, Spacer, Text, Image } from "../base__components"
import { HelpAndTipsContainer } from "./custom__section_components"
import Loader from '../loader/loader'

// Import Assets
import Shape from '../../assets/svg/custom_shape/custom_shape__4.svg'

// Import Data
import {index} from '../../api/helpandtips__api'

const CustomSection2 = () => {
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
    <Section background="black" style={{position: 'relative'}}>
      <Container fluid>
        <Text section color="white" center>
          Help & Tips
        </Text>
        <Spacer lg />
        <HelpAndTipsContainer>
          {data.map(item => (
            <Card key={item.id} backgroundImage={item.image}>
              <CardFooter>
                <CardDescription>
                  <Text text bold color="white" left >
                    {item.title}
                  </Text>
                </CardDescription>
                <CardButton>
                  <ArrowButton/>
                </CardButton>
              </CardFooter>
            </Card>
          ))}
        </HelpAndTipsContainer>
        <Image top rightValue={10} zIndex={0} absolute src={Shape} hide/>
      </Container>
    </Section>
  )
}

export default CustomSection2