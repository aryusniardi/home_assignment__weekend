import styled from 'styled-components'

const Hero = styled.div`
  width: 100vw;
  height: 100vh;

  @media (max-width: 678px) {
    height: fit-content;
  }
`

const Hero__Container = styled.div`
  padding: 84px 15vw;
  z-index: 99;

  @media (max-width: 376px) {
    padding: 67px 24px;
  }
`

const Hero__Text_Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: rgba(255, 255, 255, 1);
`

const Hero__CTA = styled.div`
  display: flex;
  margin-top: 67px;
  width: 100%;
  height: fit-content;
  justify-content: center;
`

const CTA__Image = styled.img`
  left: auto;
  right: auto;
  height: 305px;
  width: auto;
`

const CTA__Button = styled.button`
  margin-top: 200px;
  position: absolute;
  padding: 20px 84px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 29px;
  box-shadow: 0px 20px 30px rgba(249, 131, 171, 0.5);
  font-size: 16px;
  line-height: 18.75px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 1);
`

const ImageBackground = styled.div`
  position: absolute;
  top: -67px;
  left: 0;
  width: 100%;
  height: calc(100vh + 67px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: -1;
  overflow: hidden;
`

const ShapeCustom1 = styled.img`
  position: absolute;
  top: 0px;
  width: 751.56px;
  right: 40vw;

  @media (max-width: 678px) {
    right: 10vw;
  }
`

const ShapeCustom2 = styled.img`
  position: absolute;
  top: 40vh;
  width: 266px;
  left: 70vw;

  @media (max-width: 678px) {
    display: none;
  }
`

const Circle1 = styled.img`
  position: absolute;
  height: 132px;
  top: 35vh;
  left: 35vw;

  @media (max-width: 678px) {
    left: -10vw;
  }
`

export {
  Hero,
  Hero__Container,
  Hero__Text_Container,
  Hero__CTA,
  CTA__Image,
  CTA__Button,
  ImageBackground,
  ShapeCustom1,
  ShapeCustom2,
  Circle1
}