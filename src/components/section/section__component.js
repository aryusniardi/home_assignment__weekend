import { Container, Spacer, Text, Section } from "../base__components"

const Section__Component = ({title, desc, background}) => {
  return (
    <Section background={background}>
      <Container>
        <Text section center color={"white"}>{title ? title : "Title"}</Text>
        <Spacer md />
        <Text center color="white">{desc ? desc : "Description"}</Text>
      </Container>
    </Section>
  )
}

export default Section__Component