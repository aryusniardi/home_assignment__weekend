import {
  Nav, Navbar__Container, Navbar__Container_Item, Navbar__Image, Navbar__Text_Container, Navbar__Text_SubTitle, Navbar__Text_Title
} from './navbar__components'

import Logo from '../../assets/svg/logo/logo.svg'

const Navbar = ({title, subtitle}) => {
  return (
      <Nav>
        <Navbar__Container>
          <Navbar__Container_Item>
            <Navbar__Image 
              src={Logo}
              alt="Icon Logo SVG's"
            />
            <Navbar__Text_Container>
              <Navbar__Text_Title>{ title ? title: "Good Morning"}</Navbar__Text_Title>
              <Navbar__Text_SubTitle>{subtitle ? subtitle : "Fellas"}</Navbar__Text_SubTitle>
            </Navbar__Text_Container>
          </Navbar__Container_Item>
        </Navbar__Container>
      </Nav>
  )
}

export default Navbar
