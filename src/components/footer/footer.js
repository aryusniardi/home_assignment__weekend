import React from 'react'
import { Container, Text } from '../base__components'
import { CustomText, SpanText } from "./footer__components"

const Footer = () => {
  return (
    <React.Fragment>
      <Container flex background="#0B24FB" justifyContent="space-between" p>
        <Text color='white'>
          <SpanText>wknd</SpanText>@2020
        </Text>
        <CustomText>
          alpha version 0.1
        </CustomText>
      </Container>
    </React.Fragment>
  )
}

export default Footer