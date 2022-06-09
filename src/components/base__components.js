import styled from 'styled-components'
import ArrowRight from '../assets/svg/shape/arrow__right.svg'

const Text = styled.p`
  margin: 0;
  white-space: pre-wrap;
  font-size: ${props =>
    props.title ? '62px' : 
    props.section ? '32px' : 
    props.subtitle ? '21px' : 
    props.text ? '16px' :
    props.small ? '12px' : '18px'
  };
  line-height: ${props =>
    props.title ? '51px' : 
    props.section ? '37.5px' : 
    props.subtitle ? '24.61px' :
    props.text ? '18.75px' :
    props.small ? '14.08px' : '27px'
  };
  letter-spacing: ${props =>
    props.title ? '0px' : 
    props.section ? '0px' : 
    props.subtitle ? '0px' :
    props.text ? '-0.57 px' :
    props.small ? '-0.43 px' : '-0.64 px'
  };
  text-align: ${props =>
    props.left ? 'left' : 
    props.right ? 'right' :
    props.center ? 'center' : 'justify'
  };
  font-style: ${props =>
    props.italic ? 'italic' : 'normal'
  };
  font-weight: ${props => 
    props.title ? '900' :
    props.section ? '900' : 
    props.bold ? '700' :
    props.subtitle ? '600' : "400"
  };
  text-transform: ${props =>
    props.uppercase ? 'uppercase' :
    props.capitalize ? 'capitalize' : 'normal' 
  };
  color: ${props => props.color};

  @media (max-width: 576px) {
    font-size: ${props =>
      props.title ? '2rem' : 
      props.section ? '32px' : 
      props.subtitle ? '16px' : 
      props.small ? '12px' : '16px'
    };
    line-height: ${props =>
      props.title ? '2.4rem' : 
      props.section ? '37.5px' : 
      props.subtitle ? '18.75px' :
      props.small ? '14.08px' : '24px'
    };
    letter-spacing: ${props =>
      props.title ? '0px' : 
      props.section ? '0px' : 
      props.subtitle ? '0px' :
      props.small ? '-0.43 px' : '-0.64 px'
    };
  }

  @media (max-width: 768px) { 
    text-align: ${props => props.center && !(props.title || props.subtitle) ? 'left' : ''};
  }
`

const Spacer = styled.div`
  background-color: ${props => props.black ? 'black' : ''};
  height: ${props => 
    props.sm ? '10px' :
    props.md ? '20px' : 
    props.lg ? '30px' : '67px'
  };

`

const Section = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${props => props.background};
`

const Container = styled.div`
  width: ${props => props.fluid ? '70%' : 'auto'};
  padding: ${props => 
    props.xl ? '0px 15vw' : 
    props.fluid ? '0px auto' : 
    props.p ? '24px 25vw' : '0px 25vw'};
  margin: ${props => props.fluid ? 'auto' : '0'};
  display: ${props => props.flex ? 'flex' : 'block'};
  background-color: ${props => props.background ? props.background : ''};
  justify-content: ${props => props.justifyContent ? props.justifyContent : ''};

  @media (max-width: 768px) { 
    width: 90%;
    padding: ${props => props.p ? '24px 5vw'  : '0px 5vw'};
  }

  @media (min-width: 768px) and (max-width: 1200px) { 
    width: 75%;
    padding: ${props => props.p ? '24px 12.5vw'  : '0px 12.5vw'};
  }
`

const Card = styled.div`
  z-index: 3;
  height: 176px;
  flex-basis: 30%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  background-color: ${props => props.background ? props.background : 'white'};
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : ''};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  // Medium devices (tablets, 768px and up)
  @media (max-width: 768px) { 
    flex-basis: 100%;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 769px) and (max-width: 1200px) { 
    flex-basis: 75%;
  }
`

const CardFooter = styled.div`
  padding: 22px 17px;
  height: fit-content;
  width: calc(100% - 30px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  background-color: rgba(0, 0, 0, 50%);
`

const CardDescription = styled.div`
  flex-basis: 75%;
  overflow: hidden;
  white-space: nowrap;
`

const CardButton = styled.div`
  flex-basis: auto;
`

const ArrowButton = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 100%;
  background-color: white;
  background-image: url(${ArrowRight});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
`

const Image = styled.img`
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  right: ${props => 
    props.rightValue ? `${props.rightValue}vw` : 
    props.right ? '0' : ''
  };
  left: ${props => 
    props.leftValue ? `${props.leftValue}vw` :
    props.left ? '0' : ''
  };
  bottom: ${props => props.bottom ? '0' : ''};
  top: ${props => props.top ? '0': ''};
  z-index: ${props => props.absolute ? '0' : '1'};
  height: ${props => 
    props.height ? `${props.height}px` : 'auto'
  };
  width: ${props => 
    props.width ? props.width : 'auto'
  };
  transform: ${props => 
    props.rotateRight ? 'rotate(90deg)' : 
    props.rotateLeft ? 'rotate(-90deg)' : 
    props.upsideDown ? 'rotate(180deg)' : '0'
  };
  z-index: ${props => 
    props.zIndex ? props.zIndex : 1
  };

  @media (max-width: 768px) { 
    display: ${props => props.toBlock ? "block" : ""};
    position: ${props => props.toBlock ? "relative" : "" };
    margin-bottom: ${props => props.absolute ? 'none' : '60px'};
    display: ${props => props.hide ? 'none': ''};
  }
`

const SectionComponent = styled.div`
  position: relative;
  background-color: ${props => props.background ? props.background : ''};
  width: 100%;
  height: ${props => props.height ? `${props.height}px` : '100%'};

  @media (max-width: 768px) {
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: ${props => props.height ? `calc(${props.height}px + 115px)` : ''};
  }
`

export {
  Text, 
  Spacer,
  Section,
  Container, 
  Card,
  CardFooter,
  CardDescription,
  CardButton,
  ArrowButton,
  Image,
  SectionComponent
}