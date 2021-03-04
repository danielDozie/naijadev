import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap'
import styles from '../styles/Layout.module.css'

export default function Header() {
    return (<><Head>
                <title>Naira Dev Avenue</title>
            </Head>
        <div>
<Container>            
<Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top" className={styles.headerShadow}>
  <Navbar.Brand href="#home">Naira Dev Avenue</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto header">
      <Nav.Link href="#features" >About</Nav.Link>
      <Nav.Link href="#pricing" >How it works</Nav.Link>
    </Nav>
    <Nav className="justify-content-end" >
      <NavDropdown title="Useful Links" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Strapi Doc</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Nextjs Docs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Github repo</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Headless CMS</NavDropdown.Item>
      </NavDropdown>
      <Button className={styles.mybtn}>Recommend a Dev</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>

        </div>
    </>)
}
