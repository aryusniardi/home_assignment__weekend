import styled from 'styled-components'

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 1);
  height: fit-content;
  max-width: 100vw;
  `

const Navbar__Container = styled.div`
  padding: 17px 15vw;

  @media (max-width: 376px) {
    padding: 17px 24px;
  }
`

const Navbar__Container_Item = styled.div`
  display: flex;
  `

const Navbar__Image = styled.img`
  height: 33px;
  width: auto;
  `

const Navbar__Text_Container = styled.div`
  margin-left: 13px;
  display: block;
  text-align: left;
  cursor: default !important;
  user-select: none;
`

const Navbar__Text_Title = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 14px;
`

const Navbar__Text_SubTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 18.75px;
`

export {
  Nav,
  Navbar__Container,
  Navbar__Container_Item,
  Navbar__Image,
  Navbar__Text_Container,
  Navbar__Text_Title,
  Navbar__Text_SubTitle
}