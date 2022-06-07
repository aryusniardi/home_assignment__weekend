import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  font-size: ${props =>
    props.title ? '62px' : 
    props.section ? '32px' : 
    props.subtitle ? '21px' : 
    props.small ? '12px' : '18px'
  };
  line-height: ${props =>
    props.title ? '51px' : 
    props.section ? '37.5px' : 
    props.subtitle ? '24.61px' :
    props.small ? '14.08px' : '27px'
  };
  letter-spacing: ${props =>
    props.title ? '0px' : 
    props.section ? '0px' : 
    props.subtitle ? '0px' :
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
    props.subtitle ? '600' : "400"
  };
  text-transform: ${props =>
    props.uppercase ? 'uppercase' :
    props.capitalize ? 'capitalize' : 'normal' 
  };
  color: ${props => props.color};

  @media (max-width: 376px) {
    font-size: ${props =>
      props.title ? '52px' : 
      props.section ? '32px' : 
      props.subtitle ? '16px' : 
      props.small ? '12px' : '16px'
    };
    line-height: ${props =>
      props.title ? '51px' : 
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
  @media (max-width: 312px) {
    font-size: ${props =>
      props.title ? '2  rem' : 
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
`

const Spacer = styled.div`
  background-color: ${props => props.black ? 'black' : ''};
  height: ${props => 
    props.sm ? '10px' :
    props.md ? '20px' : 
    props.lg ? '67px' : '0px'
  };
`

const Section = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${props => props.background};
`

const Container = styled.div`
  padding: 0px 15vw;
`

export {
  Text, 
  Spacer,
  Section,
  Container
}