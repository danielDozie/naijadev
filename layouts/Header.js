import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import styles from '../styles/Layout.module.css'
import styled from 'styled-components'

const Navbrand = styled.text `{
  color: ${({theme})=> theme.navBrand};
}` 
const Button = styled.button `{
  color: ${({theme})=> theme.navBrand};
}` 

const NavTheme = styled.nav `{
  background-color: ${({theme}) => theme.navTheme};
}`


export default function Header() {
    return (<><Head>
                <title>ngDEVHUB - Nigeria's Developers Zone</title>
            </Head>
        <div>
<Container> 
<NavTheme>           
<Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top" className={styles.headerShadow}>
  <Navbar.Brand href="/" className={styles.logoText}><Navbrand><sup>ng</sup>DEV.<sub>HUB</sub> </Navbrand></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className={styles.navLink}>
    <Nav className="mr-auto header">
      <Nav.Link href="/about" >About</Nav.Link>
      <Nav.Link href="/how-it-works" >How it works</Nav.Link>
    </Nav>
    <Nav className="justify-content-end" >
      <NavDropdown title="Useful Links" id="collasible-nav-dropdown">
      <div className={styles.dropDown}>
        <NavDropdown.Item href="https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html" target="_blank">Strapi Doc</NavDropdown.Item>
        <NavDropdown.Item href="https://nextjs.org/docs/getting-started" target="_blank">Nextjs Docs</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/badt0men/naijadev" target="_blank">Github repo</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.contentful.com/r/knowledgebase/what-is-headless-cms/" target="_blank">Headless CMS</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Button className={styles.mybtn}>Recommend a Dev</Button>
      <br />
    </Nav>
  </Navbar.Collapse>
</Navbar>
</NavTheme>
</Container>

        </div>
    </>)
}
